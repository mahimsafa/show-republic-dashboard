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
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

            &:first-child {
                width: 50px;
            }
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
    border-radius: 10px;
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(225, 225, 225, 1);
    
    li {
        display: flex;
        align-items: center;
        color: rgba(71, 84, 103, 1);
        font-size: 14px;
        white-space: nowrap;
        gap: 10px;
        width: 40%;

        &:first-child {
            width: 50px;
        }

        &:nth-child(2) {
            display: flex;
            gap: 8px;
            color: rgba(30, 41, 59, 1);
            
            img {
                height: 30px;
            }
        }

        &:nth-child(3) {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(30, 41, 59, 1);
        }

        &:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            &::before {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(50, 174, 59, 1);
            }

            color: rgba(50, 174, 59, 1);
        }

        @media screen and (min-width: 880px) {
            flex: 1;
        }
    }
`;