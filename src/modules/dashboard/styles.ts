import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 0px 0px;
    width: 100%;
`;

export const Container = styled.div`
    padding: 20px 20px;
`;

export const TopHead = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(248, 250, 252, 1);
    padding: 20px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 18px;
        margin-bottom: 5px;
        color: rgba(30, 41, 59, 1);
        font-weight: 400;
    }

    h4 {
        font-size: 14px;
        color: rgba(102, 112, 133, 1);
        font-weight: 400;
        margin-bottom: 20px;
    }
`;

export const UserStats = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
    }
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        background-color: rgba(254, 194, 88, 0.1);
        padding: 20px;
        border-radius: 16px;

        b {
            font-size: 18px;
            font-weight: 400;
            color: rgba(30, 41, 59, 1);
        }

        span {
            font-size: 15px;
            font-weight: 400;
            color: rgba(71, 85, 105, 1);;
        }

        &:nth-child(2) {
            background-color: rgba(180, 35, 24, 0.1);
        }

        &:nth-child(3) {
            background-color: rgba(2, 122, 72, 0.1);
        }
    }
`;


export const AnalyticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;


    @media screen and (min-width: 720px) {
        flex-direction: row;
    }

    @media screen and (min-width: 880px) {
        flex-wrap: unset;
    }
`;

export const AnalyticsCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    flex: 1;
    padding: 20px;
    background-color: rgba(111, 168, 255, 0.1);
    border-radius: 16px;

    @media screen and (min-width: 720px) {
        width: 50%;
    }

    @media screen and (min-width: 880px) {
        width: unset;
    }

    .info {

        h5 {
            font-size: 19px;
            font-weight: 600;
            color: rgba(111, 168, 255, 1);
            line-height: 14px;
            margin-bottom: 4px;
        }

        span {
            display: block;
            font-size: 13px;
            font-weight: 400;
            color: rgba(71, 85, 105, 1);
            text-align: center;
            margin: 0px auto;
        }
    }

    ul {
        margin: 0px;

        h6 {
            font-size: 14px;
            font-weight: 500;
            color: rgba(71, 85, 105, 1);
            margin-bottom: 3px;
        }

        li {
            display: flex;
            align-items: center;
            gap: 6px;
            
            b {
                font-size: 13px;
                font-weight: 400;
                color: rgba(30, 41, 59, 1);
            }

            span {
                font-size: 11px;
                font-weight: 400;
                color: rgba(71, 85, 105, 1);
            }
        }
    }

    &:nth-child(2) {
        background-color: rgba(141, 79, 197, 0.1);
        .info {
            h5 {
                color: rgba(141, 79, 197, 1);
            }
        }
    }

    &:nth-child(3) {
        background-color: rgba(230, 64, 149, 0.1);
        .info {
            h5 {
                color: rgba(230, 64, 149, 1);
            }
        }
    }


    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;

export const EarningsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(250, 250, 250, 1);
    border-radius: 10px;
    margin-top: 20px;
    padding: 0px 20px;
    border: 1px solid rgba(238, 238, 238, 1);
    

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

    li {
        display: flex;
        flex-direction: column;
        padding: 20px 0px;
        order: 1;

        h5 {
            font-size: 24px;
            font-weight: 300;
            color: rgba(0, 148, 186, 1);
        }

        span {
            font-size: 14px;
            color: rgba(122, 122, 122, 1);
        }

        &:nth-child(2) {
            order: 3;
        }

        &:nth-child(3) {
            order: 5;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        font-size: 14px;
        font-weight: 500;
        order: 6;
        background-color: rgba(111, 168, 255, 1);
        border: none;
        height: 40px;
        border-radius: 20px;
        padding: 0px 20px;
        color: #fff;
        max-width: 200px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;

        &::before {
            width: 2px;
            height: 50px;
        }

        &::after {
            width: 2px;
            height: 50px;
        }

        button {
            margin-bottom: 0px;
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
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

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