import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 20px 20px;
    width: 100%;
    min-height: 100vh;
    background-color: #F5F5F5;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
    
`;

export const ProfileCard = styled.div`
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 10px;

    .img-wrapper {
        border-radius: 15px;
        margin-bottom: 20px;
        max-width: 300px;
        margin: 0px auto 20px auto;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        color: #1189F4;
        text-align: center;
        margin: 0px auto 20px auto;
    }

    @media screen and (min-width: 880px) {
        max-width: 480px;
    }
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


export const TabWrapper = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;

    .add-admin {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: 20px;
        padding: 0px 17px;
        background-color: #6FA8FF;
        color: #FCFCFD;
        margin-left: auto;
        gap: 8px;
        border: none;
        cursor: pointer;
        width: 100%;

        span {
            font-size: 13px;
        }

        img {
            height: 18px;
        }

        @media screen and (min-width: 640px) {
            width: unset;
        }
    }
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
    background-color: ${props => props.isActive ? "#1189F4" : "#F1F5FF"};
    color: ${props => props.isActive ? "#fff" : "#000000"};
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

export const ActionsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    button {
        height: 45px;
        border-radius: 24.5px;
        padding: 0px 25px;
        color: #EEEEEE;
        background-color: #039855;
        font-size: 13px;
        cursor: pointer;
        
        &:first-child {
            background-color: #DE2626;
        }
    }
`;