import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 20px 20px;
    width: 100%;
`;

export const Container = styled.div`

`;

export const TopHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;

export const Earnings = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(226, 232, 240, 1);
    padding: 8px 12px;
    border-radius: 8px;
    gap: 15px;
    flex: 1;

    img {
        height: 30px;
    }

    div {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 880px) {
            flex-direction: row;
            flex: 1;
        }

        span {
            &:first-child {
                font-weight: 400;
                font-size: 13px;
                color: rgba(71, 85, 105, 1);
                margin-right: 15px;
            }

            &:last-child {
                font-size: 15px;
                font-weight: 600;
                color: rgba(30, 41, 59, 1);
            }
        }
        
    }

    .earninc-inc {
        font-size: 12px;
        color: rgba(4, 120, 87, 1);
    }
`;


export const Filter = styled.form`
    display: flex;
    align-items: center;
    gap: 4px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(203, 213, 225, 1);
        height: 40px;
        width: 40px;
        border-radius: 8px;
        cursor: pointer;

        img {
            height: 20px;
        }

        @media screen and (min-width: 880px) {
            /* height: 100%; */
        }
    }

    select {
        background-color: transparent;
        padding: 10px 10px;
        border-radius: 8px;
        height: 40px;
        border: 1px solid rgba(203, 213, 225, 1);
        color: rgba(51, 65, 85, 1);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const MetaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`;

export const Export = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(203, 213, 225, 1);
    height: 40px;
    padding: 0px 15px;
    border-radius: 8px;
    cursor: pointer;

    span {
        font-size: 12px;
        color: rgba(30, 41, 59, 1);
    }

    img {
        height: 20px;
    }
`;

export const EarningsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(250, 250, 250, 1);
    border-radius: 10px;
    margin-top: 20px;
    padding: 0px 20px;

    

    &::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgba(217, 217, 217, 1);
        order: 2;
    }

    &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgba(217, 217, 217, 1);
        order: 4;
    }

    @media screen and (min-width: 880px) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;

        &::before {
            width: 2px;
            height: 20px;
        }

        &::after {
            width: 2px;
            height: 20px;
        }
    }

    li {
        display: flex;
        flex-direction: column;
        padding: 20px 0px;
        order: 1;

        h5 {
            font-size: 18px;
            font-weight: 400;
            color: rgba(30, 41, 59, 1);
        }

        span {
            font-size: 15px;
            color: rgba(71, 85, 105, 1);
        }

        &:nth-child(2) {
            order: 3;
        }

        &:nth-child(3) {
            order: 5;
        }
    }
`;

export const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px 15px;
        background-color: rgba(250, 250, 250, 1);
        border-radius: 10px;

        h4 {
            font-size: 20px;
            font-weight: 400;
            color: rgba(30, 41, 59, 1);
            line-height: 14px;
        }

        span {
            font-size: 14px;
            font-weight: 300;
            color: rgba(71, 85, 105, 1);
            line-height: 14px;
        }
    }

    @media screen and (min-width: 880px) {
        flex-direction: row;
        
        li {
            flex: 1;
        }
    }
`;

export const Demography = styled.div`
    background-color: rgba(250, 250, 250, 1);
    border-radius: 15px;
    margin-top: 20px;

    .head {
        display: flex;
        align-items: center;
        padding: 20px 20px;
        border-bottom: 1px solid rgba(203, 213, 225, 1);

        img {
            height: 20px;
        }

        p {
            flex: 1;
            margin-left: 10px;
            margin-bottom: 0px;
            color: rgba(51, 65, 85, 1);
            font-size: 15px;
        }

        a {
            font-size: 13px;
            color: rgba(111, 168, 255, 1);
        }
    }
`;

export const GraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;

export const GraphCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(226, 232, 240, 1);
    border-radius: 15px;
    padding: 20px 20px;
    flex: 1;

    h3 {
        font-size: 14px;
        color: rgba(71, 85, 105, 1);
        text-align: center;
        font-weight: 400;
        margin-bottom: 20px;
    }

    img {
        max-width: 250px;
    }
`;

export const LocationsWrapper = styled.div`
    padding: 0px 20px 20px 20px;
`;

export const LocationContent = styled.div`
    border: 1px solid rgba(226, 232, 240, 1);
    border-radius: 15px;
    padding: 20px 20px;

    h3 {
        font-size: 14px;
        color: rgba(71, 85, 105, 1);
        font-weight: 400;
        margin-bottom: 20px;
    }

    .map-wrapper {
        width: 100%;
        height: 400px;
        border-radius: 15px;
        overflow: hidden;
    }
`;