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
    background-color: #F5FBFC;
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
    margin-bottom: 20px;

    .info {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
        }

        .text-content {
            h3 {
                font-size: 15px;
                color: #0094BA;
                font-weight: 600;
                margin-bottom: 4px;
            }

            h6 {
                font-size: 16px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 4px;
            }

            span {
                font-size: 13px;
                font-size: 500;
                color: #FF8E01;
                background-color: #FF8E010A;
                padding: 4px 6px;
                border-radius: 4px;
            }
        }
    }

    .status {
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 10px 20px;
        background-color: #FF8E011A;
        color: #FF8E01;
        align-self: stretch;
        border-radius: 8px;
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        padding: 0px 25px;
        border-radius: 6px;
        background-color: #2E2E2E;
        cursor: pointer;

        &:nth-child(2) {
            background-color: #FF8E01;
        }
        &:nth-child(3) {
            background-color: #B71C1C;
        }

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
