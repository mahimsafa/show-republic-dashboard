import styled from "styled-components"


export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 14px;
    padding: 20px 20px;
    margin-bottom: 10px;

    h3 {
        font-size: 16px;
        font-weight: 400;
        color: #475467;
    }
`;


export const TableWrapper = styled.div`
    margin-top: 20px;
    .head {
        display: none;
        gap: 10px;
        padding: 15px 15px;
        background-color: #F5F7F7;

        li {
            font-size: 14px;
            text-transform: capitalize;
            flex: 1;
            color: #7C8080;
            font-weight: 300;
            white-space: nowrap;

            &:first-child {
                width: 40px;
                flex: unset;
            }
        }

        @media screen and (min-width: 720px) {
            display: flex;
        }
    }
`;

export const TableItems = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 15px 15px;
    border-bottom: 1px solid rgba(225, 225, 225, 1);

    &:last-child {
        border-bottom: none;
    }

    li {
        font-size: 14px;
        color: #4A4D4D;

        &:first-child {
            display: none;
            width: 40px;
            &::before {
                content: "";
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #636666;
            }
        }

        @media screen and (min-width: 720px) {
            flex: 1;

            &:first-child {
                display: block;
                flex: unset;
            }
        }
    }
`;