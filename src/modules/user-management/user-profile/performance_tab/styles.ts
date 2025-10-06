import styled from "styled-components"


export const Wrapper = styled.div`

`;

export const ActiveUsers = styled.div`
    background-color: #fff;
    border-radius: 14px;
    padding: 20px 20px;
    margin-bottom: 10px;

    h3 {
        font-size: 16px;
        margin-bottom: 20px;
        color: #475467;
        font-weight: 500;
    }

    ul {
        display: flex;
        margin: 0px;
        padding: 0px;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            flex: 1;

            span {
                font-size: 13px;
                font-weight: 400;
                color: #475467;
            }

            b {
                font-size: 24px;
                color: #475467;
                font-weight: 400;
            }
        }
    }
`;

export const PerformanceStats = styled.div`
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 14px;

    h3 {
        font-size: 16px;
        margin-bottom: 8px;
        color: #475467;
        font-weight: 500;
    }

    .meta {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;

        span {
            font-size: 13px;
            font-weight: 400;
            color: #667085;
        }

        svg {
            font-size: 20px;
            color: #667085;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0px;
        padding: 0px;
        
        li {
            margin: 0px;

            h6 {
                font-size: 13px;
                font-weight: 400;
                color: #475467;
                margin-bottom: 5px;
            }

            h4 {
                font-size: 25px;
                font-weight: 400;
                color: #475467;
                margin-bottom: 5px;
            }

            span {
                font-size: 12px;
                font-weight: 400;
                color: #039855;
            }
        }

        @media screen and (min-width: 320px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;

export const PerformceGraph = styled.div`
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 14px;
    margin-top: 10px;
    border-top: 4px solid #1189F4;

    .head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;

        ul {
            margin: 0px;
            padding: 0px;

            h3 {
                font-size: 13px;
                font-weight: 400;
                color: #667085;
                margin-bottom: 5px;
            }

            li {
                display: flex;
                align-items: center;
                gap: 8px;

                span {
                    font-size: 18px;
                    font-weight: 500;
                    color: #475467;
                }

                svg {
                    color: #d92d20;
                    font-size: 18px;
                }
            }
        }

        .filter {
            display: flex;
            align-items: center;
            gap: 40px;
            cursor: pointer;

            .info {
                display: flex;
                flex-direction: column;

                span {
                    font-size: 12px;
                    font-weight: 300;
                    color: #667085;
                }

                b {
                    font-size: 14px;
                    font-weight: 500;
                    color: #475467;
                }
            }
        }
    }
`;