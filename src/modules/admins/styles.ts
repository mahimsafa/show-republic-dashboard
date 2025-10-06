import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    padding: 20px 20px;
`;

export const TabWrapper = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .add-admin {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: 20px;
        padding: 0px 17px;
        background-color: #6FA8FF;
        color: #FCFCFD;
        margin-left: auto;
        gap: 8px;
        border: none;
        cursor: pointer;
        width: 100%;

        span {
            font-size: 13px;
        }

        img {
            height: 18px;
        }

        @media screen and (min-width: 640px) {
            width: unset;
        }
    }
`;

export const TabItem = styled.span<{isActive?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 38px;
    border-radius: 19px;
    font-size: 13px;
    cursor: pointer;
    background-color: ${props => props.isActive ? "rgba(17, 137, 244, 1)" : "rgba(241, 245, 255, 1)"};
    color: ${props => props.isActive ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};

    &.has-notification {
        position: relative;
        &::before {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #B71C1C;
            border: 2px solid #fff;
            position: absolute;
            top: -3px;
            right: -3px;
        }
    }
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    padding: 0px 20px;

    img.search-icon {
        height: 25px;
    }

    input {
        flex: 1;
        min-width: 20px;
        margin-left: 10px;
        outline: none;
    }
`;

export const FilterBox = styled.div`
    display: flex;
    gap: 20px;

    button {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            height: 20px;
        }

        span {
            color: rgba(97, 97, 97, 1);
            font-weight: 300;
        }

        img.down-arrow {
            height: 10px !important;
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

export const InviteUserContent = styled.div`
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
    }

    h2 {
        font-size: 20px;
        font-size: 600;
        text-align: center;
        color: #1189F4;
        margin: 20px auto 20px auto;
    }

    .input-wrapper {
        margin-bottom: 40px;
        label {
            color: #474747;
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .input-box {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 10px;
            border-radius: 6px;
            border: 1px solid #E0E0E0;
            color: #FDFDFD;

            input {
                outline: none;
                flex: 1;
                min-width: 100px;
                color: #878787;
                font-size: 14px;
                font-weight: 300;
                height: 25px;
            }
        }

        p {
            font-size: 12px;
            font-weight: 300;
            margin: 2px;
            color: #474747;
        }
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;
        margin: 0px 0px 30px 0px;

        button {
            height: 40px;
            border-radius: 20px;
            padding: 0px 20px;
            background-color: #1189F4;
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

    .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0px auto 20px auto;
        background-color: #E0E9FF;

        img {
            height: 35px;
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
        margin: 0px auto 10px auto;
    }

    p {
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        color: #474747;
        margin: 0px auto 20px auto;
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
            background-color: #1189F4;
            color: #EEEEEE;
            font-size: 12px;
            width: 140px;
            border: none;
            cursor: pointer;
        }
    }
`;