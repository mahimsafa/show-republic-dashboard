import styled from "styled-components"

export const Wrapper = styled.div`

`;


export const FieldCol = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #F7F9FA;
    padding: 9px 14px;
    gap: 1px;
    margin-top: 15px;
    border-radius: 10px;

    span {
        color: #7A7A7A;
        font-size: 14px;
        font-weight: 300;
    }

    b {
        color: #616161;
        font-size: 14px;
        font-weight: 500;
        margin: 0px;
    }
`;


export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 880px) {
        flex: 1;
    }
`;

export const InfoWSection = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px;
    h2 {
        font-size: 18px;
        color: #616161;
        font-weight: 500;
    }

`;

export const Row = styled.div`
    display: flex;
    gap: 20px;
`;

export const DownloadOfferLetter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    select {
        height: 44px;
        border: 1px solid #D0D5DD;
        background-color: transparent;
        color: #667085;
        padding: 0px 20px;
        border-radius: 8px;
        font-size: 13px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 13px;
        height: 44px;
        background-color: #6FA8FF;
        padding: 0px 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;

        span {
            font-size: 13px;
            color: #FCFCFD;
        }

        img {
            height: 20px;
        }
    }

    @media screen and (min-width: 640px) {
        flex-direction: row;

        select {
            flex: 1;
        }

        button {
            width: fit-content;
        }
    }
`;


export const IdentityDocs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    @media screen and (min-width: 640px) {
        flex-direction: row;
    }

    .item {
        background-color: #F7F9FA;
        padding: 15px 15px;
        border-radius: 8px;
        flex: 1;

        .head {
            display: flex;
            justify-content: space-between;
            margin-bottom: 17px;

            .attachment-box {
                display: flex;
                gap: 6px;
                padding: 4px 10px;
                background-color: #0094BA0A;
                border: 0.5px solid #006395;
                border-radius: 20px;

                img {
                    height: 17px;
                }

                span {
                    color: #0094BA;
                    font-size: 13px;
                    font-weight: 400;
                }
            }

            svg {
                font-size: 18px;
                color: #7A7A7A;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            padding: 0px;
            gap: 15px;

            li {
                display: flex;
                gap: 20px;

                span {
                    min-width: 70px;
                    color: #7A7A7A;
                    font-size: 14px;
                    font-weight: 300;
                }

                b {
                    color: #616161;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
`;