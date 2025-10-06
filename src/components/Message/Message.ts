// import { Wrapper, Success, Text, Error } from "./styles";

export const success = (message: string) => {
    if (document.querySelector('.lofty-message-wrapper')) {
        const wrapper:Element | null = document.querySelector('.lofty-message-wrapper')
        const content = '<div class="lofty-message-box lofty-message-success"><span>'+message+'</span></div>';
        wrapper!.innerHTML = content
    } else {
        const appWrapper = document.querySelector('body')
        const wrapper = document.createElement("div");
        wrapper.classList.add("lofty-message-wrapper")
        appWrapper!.appendChild(wrapper)

        const content = '<div class="lofty-message-box lofty-message-success"><span>'+message+'</span></div>';
        wrapper.innerHTML = content
    }
}

export const error = (message: string) => {
    let displayMessage: string = "An error occurred";
    displayMessage = message

    if (document.querySelector('.lofty-message-wrapper')) {
        const wrapper = document.querySelector('.lofty-message-wrapper')
        const content = '<div class="lofty-message-box lofty-message-error"><span>'+displayMessage+'</span></div>';
        wrapper!.innerHTML = content
    } else {
        const appWrapper = document.querySelector('body')
        const wrapper = document.createElement("div");
        wrapper.classList.add("lofty-message-wrapper")
        appWrapper!.appendChild(wrapper)

        const content = '<div class="lofty-message-box lofty-message-error"><span>'+displayMessage+'</span></div>';
        wrapper.innerHTML = content
    }
}

