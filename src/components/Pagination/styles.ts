import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px;
        gap: 20px;

        span {
            display: flex !important;
            justify-content: center;
            align-items: center;
            color: #667085;
            font-weight: 600;
            align-self: center;
            padding: 0px !important;
        }

        li {
            a {
                display: block;
                background: #F5F7F7;
                padding: 10px 15px;
                color: #4A4D4D;
                font-size: 13px;
                font-weight: 600;
                border-radius: 6px;
            }

            &.active {
                a {
                    background-color: #1189F4;
                    color: #FCFCFD;
                }
            }
        }
    }
`;