import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 0px 0px;
    width: 100%;
    background-color: #F5F5F5;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
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

export const Asidebar = styled.aside`
    padding: 20px 20px;
    background-color: #FFFFFF;
    border-radius: 10px;

    h1 {
        color: #0094BA;
        font-size: 25px;
        font-weight: 500;
    }

    span {
        color: #E65100;
    }

    p {
        font-size: 14px;
        margin-top: 20px;
        color: #474747;
    }

    img {
        width: 100%;
        max-width: 320px;
    }

    @media screen and (min-width: 880px) {
        flex: 1;
        max-width: 320px;
        margin-top: 30px;
    }
`;

export const FormWrapper = styled.div`
    h2 {
        font-size: 17px;
        color: #474747;
        font-weight: 500;
        margin: 0px 0px 10px 20px;
    }

    @media screen and (min-width: 880px) {
        flex: 1;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background-color: #FFFFFF;
    border-radius: 10px;

`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    width: 100%;
    min-width: 200px;

    label {
        font-size: 14px;
        font-weight: 400;
        color: #7A7A7A;
    }

    input, select {
        height: 50px;
        border-radius: 5px;
        background-color: #F7F9FA;
        width: 100%;
        padding: 0px 18px;
        font-size: 14px;
        color: #7A7A7A;
    }

    .attachment-select {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        background-color: #F7F9FA;
        height: 50px;
        border-radius: 5px;

        img {
            height: 26px;
        }

        span {
            font-size: 13px;
            color: #0094BA;
            font-weight: 400;
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0px;

        li {
            font-size: 14px;
            font-weight: 400;
            color: #0094BA;
            cursor: pointer;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;

    .picture-upload {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;

        .img-box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            padding: 0px 20px;
            border-radius: 8px;
            border: 1px solid #D4D4D4;
            background-color: #F7F9FA;
            cursor: pointer;

            span {
                font-size: 13px;
                color: #7A7A7A;
                font-weight: 400;
                white-space: nowrap;
            }
        }

        b {
            font-size: 13px;
            font-weight: 400;
            color: #7A7A7A;
        }
    }
`;

export const FormNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin-top: 30px;

    button {
        display: flex;
        align-items: center;
        border: none;
        cursor: pointer;
        gap: 10px;

        span {
            font-size: 15px;
            font-weight: 500;
        }

        svg {
            font-size: 20px;
        }

        &:nth-child(2) {
            justify-content: center;
            align-items: center;
            height: 40px;
            border-radius: 25px;
            padding: 0px 20px;
            width: 130px;
            font-size: 13px;
            background-color: #6FA8FF;
            color: #fff;
        }
    }
`;

export const PopupModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #0006;
    top: 0px;
    left: 0px;
    z-index: 9999999999;
`;

export const ConfirmProfileContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 720px;
    padding: 20px 20px;

    .content {
        max-width: 480px;
        margin: 0px auto;
    }

    h2 {
        font-size: 17px;
        font-size: 600;
        text-align: center;
        color: #000000;
        margin: 20px auto 20px auto;
    }

    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 0px 0px 30px 0px;

        button {
            height: 40px;
            border-radius: 6px;
            padding: 0px 20px;
            background-color: #32AE3B;
            color: #EEEEEE;
            font-size: 12px;
            border: none;
            cursor: pointer;

            &:last-child {
                background-color: #DE2626;
            }
        }
    }
`;

export const InviteSuccessContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 720px;
    padding: 20px 20px;

    .head {
        display: flex;
        justify-content: flex-end;

        .close {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #E0E0E0;
            width: 34px;
            height: 34px;
            background-color: #F6F6F6;
            border-radius: 4px;
            cursor: pointer;

            svg {
                font-size: 18px;
            }
        }
    }

    .content {
        max-width: 480px;
        margin: 0px auto;

        @media screen and (min-width: 880px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
        }
    }

    h2 {
        font-size: 20px;
        font-size: 600;
        text-align: center;
        color: #1189F4;
        margin: 10px auto 25px auto;
    }

    p {
        font-size: 13px;
        font-weight: 400;
        max-width: 320px;
        text-align: center;
        color: #474747;
        margin: 0px auto 35px auto;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 0px auto 10px auto;

        button {
            height: 40px;
            border-radius: 20px;
            padding: 0px 20px;
            background-color: #6FA8FF;
            color: #EEEEEE;
            font-size: 12px;
            border: none;
            cursor: pointer;
        }
    }
`;