import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 0px;
    width: 100%;
    background-color: #F5F5F5;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background-color: #FFFFFF;
    border-radius: 10px;

    .add-new-id-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #0094BA;
        border: none;
        background-color: transparent;
        cursor: pointer;

        span {
            font-size: 14px;
        }

        svg {
            font-size: 17px;
        }
    }
`;

interface InputProps {
    $error?: boolean;
}

export const Input = styled.div<InputProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    width: 100%;
    min-width: 200px;

    input, select {
        border: 1px solid ${props => props.$error ? '#ff4444' : '#E0E0E0'};
        
        &:focus {
            border-color: ${props => props.$error ? '#ff4444' : '#0094BA'};
        }
    }
    
    .error {
        color: #ff4444;
        font-size: 12px;
        margin-top: 4px;
    }

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


export const UploadBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px dashed #B8B8B8;
    border-radius: 8px;
    padding: 20px 20px;
    gap: 20px;

    .img-box {
        width: fit-content;
        height: fit-content;

        img {
            height: 70px;
        }
    }

    .info {

        h3 {
            font-size: 15px;
            color: #0094BA;
            margin-bottom: 4px;

            span {
                color: #7A7A7A;
            }
        }

        p {
            font-size: 16px;
            font-weight: 300;
            color: #616161;
            margin-bottom: 0px;
        }
    }
`;
