import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    padding: 20px 20px;

    h2 {
        font-size: 18px;
        color: rgba(71, 84, 103, 1);
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

export const CountryList = styled.div`

`;

export const CountryData = styled.ul`
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
        color: rgba(71, 84, 103, 1);

        font-size: 14px;
        &:first-child {
            display: flex;
            gap: 8px;
            color: rgba(30, 41, 59, 1);
            
            img {
                height: 20px;
            }
        }
    }
`;