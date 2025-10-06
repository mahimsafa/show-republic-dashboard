import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    padding: 20px 20px;
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

export const TableWrapper = styled.div`
    margin-top: 0px;
`;

export const TableItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 15px 15px;
    border-radius: 10px;
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(225, 225, 225, 1);
    
    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:first-child {
            align-items: unset;
        }


        &:last-child {
            align-items: flex-end;
            margin-left: auto;
        }

        img {
            height: 30px;
            width: fit-content;
            margin: 0px !important;
        }

        b {
            font-size: 15px;
            font-weight: 500;
            color: #0094BA;
        }

        span {
            font-size: 13px;
            font-weight: 300;
            color: #7A7A7A;
        }

        &:last-child {
            svg {
                color: #1C1C1C;
                font-size: 20px;
            }
        }


        @media screen and (min-width: 880px) {
            flex: 1;

            &:nth-child(2) {
                border-left: 1px solid #C7C7C7;
                border-right: 1px solid #C7C7C7;
            }
            &:nth-child(3) {
                border-right: 1px solid #C7C7C7;
            }
        }
    }

    @media screen and (min-width: 880px) {
            flex: 1;
        }
`;