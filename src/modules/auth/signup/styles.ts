import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 0px 0px;
    width: 100%;
    background-color: #fff;
`;

export const Container = styled.div`
    padding: 20px 20px;
`;


export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 20px 20px;
    background-color: #6FA8FF;
    position: relative;
    overflow: hidden;

    h1 {
        font-size: 25px;
        font-weight: 600;
        margin: 0px auto;
        text-align: center;
        color: #FFFFFF;
        z-index: 55;
    }

    .patterns-wrapper {
        position: absolute;
        z-index: 1;
        display: flex; 
    }

    .right-img {
        right: 0px;

        img {
            &:nth-child(1) {
                display: none;
            }

            @media screen and (min-width: 720px) {
                &:nth-child(1) {
                    display: block;
                }
            }
        }
    }

    .left-img {
        left: 0px;

        img {
            &:nth-child(1) {
                display: none;
            }

            @media screen and (min-width: 720px) {
                &:nth-child(1) {
                    display: block;
                }
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 21px;
        color: #4094FA;
        text-align: center;
        margin-bottom: 20px;
    }

    h6 {
        font-size: 14px;
        color: #000;
        text-align: center;
        margin-bottom: 40px;
    }

    input {
        width: 100%;
        max-width: 480px;
        height: 55px;
        border-radius: 8px;
        padding: 0px 18px;
        margin: 0px auto 20px auto;
        border: 1px solid #E0E0E0;
        background-color: transparent;
        font-size: 14px;
    }

    button {
        width: 100%;
        max-width: 320px;
        height: 50px;
        border-radius: 25px;
        background-color: #6FA8FF;
        border: none;
        margin: 20px auto 0px auto;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
    }
`;