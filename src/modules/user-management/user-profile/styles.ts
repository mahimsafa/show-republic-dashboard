import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #0006;
    z-index: 999999999999;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 20px 20px;
    background-color: #F1F5FF;
    height: 100vh;
    overflow-y: scroll;
    position: absolute;
    right: 0px;
    top: 0px;
`;


export const Meta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
        font-size: 16px;
        font-weight: 700;
        color: #1189F4;
    }

    .close {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        font-size: 15px;
        border-radius: 6px;
        color: #2E2E2E;
        border: 1px solid #2E2E2E;
        cursor: pointer;
    }
`;

export const TopHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 10px;
    border-radius: 8px;
    margin-top: 20px;

    .info {
        display: flex;
        align-items: center;
        gap: 10px;

        h3 {
            font-size: 15px;
            color: #1189F4;
            font-weight: 600;
            margin-bottom: 0px;
        }

        img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .status {
        font-size: 14px;
        padding: 10px 20px;
        background-color: #32AE3B0A;
        color: #32AE3B;
    }
`;

export const TabWrapper = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const TabItem = styled.div<{isActive?: boolean}>`
    display: flex;
    align-items: center;
    height: 36px;
    background-color: ${props => props.isActive ? "#1189F4" : "transparent"};
    border-radius: 20px;
    padding: 0px 20px;
    font-size: 14px;
    color: ${props => props.isActive ? "#fff" : "#000"};
    cursor: pointer;
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        padding: 0px 25px;
        border-radius: 20px;
        background-color: #12B76A;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            font-weight: 400;
            color: #EEEEEE;
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

export const PopupContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;
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

    .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0px auto 20px auto;
        background-color: #FEF3F2;

        img {
            height: 25px;
        }
    }

    h2 {
        font-size: 20px;
        font-size: 600;
        text-align: center;
        color: #F04438;
        margin: 0px auto 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #474747;
        margin: 0px auto 20px auto;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px auto 20px auto;
        gap: 10px;

        img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            object-fit: cover;
        }

        h3 {
            font-size: 13px;
            color: #1189F4;
            font-weight: 500;
            margin-bottom: 0px;
        }
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
            background-color: #B42318;
            color: #EEEEEE;
            font-size: 12px;
            border: none;
            cursor: pointer;

            &:first-child {
                background-color: #EEEEEE;
                color: #1189F4;
            }
        }
    }
`;