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
    margin-top: 20px;
    .head {
        display: none;
        gap: 10px;
        padding: 0px 15px;

        li {
            font-size: 15px;
            text-transform: uppercase;
            flex: 1;
            white-space: nowrap;
            color: #949494;
        }

        @media screen and (min-width: 880px) {
            display: flex;
        }
    }
`;

export const TableItems = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    padding: 15px 15px;
    border-radius: 8px;
    background-color: #F6F6F6;
    box-shadow: 0px 0px 5px -1px #0093AA1A;
    
    li {
        display: flex;
        align-items: center;
        color: rgba(71, 84, 103, 1);
        font-size: 14px;
        white-space: nowrap;
        gap: 10px;
        width: 40%;

        &:nth-child(1) {
            display: flex;
            gap: 8px;
            color: rgba(30, 41, 59, 1);
            
            img {
                height: 50px;
                border-radius: 25px;
            }
        }

        &:nth-child(3) {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #0094BA;
        }

        &:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            
            button {
                background-color: #1189F4;
                height: 40px;
                border-radius: 20px;
                color: #EEEEEE;
                font-size: 13px;
                font-weight: 400;
                border: none;
                padding: 0px 18px;
                cursor: pointer;
            }
        }

        @media screen and (min-width: 880px) {
            flex: 1;
        }
    }
`;