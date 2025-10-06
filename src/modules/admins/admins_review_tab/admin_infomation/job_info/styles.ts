import styled from "styled-components"

export const Wrapper = styled.div`

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

