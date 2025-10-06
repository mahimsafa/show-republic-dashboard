import styled from "styled-components"

export const Wrapper = styled.div`

`;
export const Section = styled.div`
    margin-bottom: 30px;
    h3 {
        padding-left: 40px;
        font-size: 14px;
        color: #7A7A7A;
        margin-bottom: 8px;
        font-weight: 600;
    }
`;

export const SectionContainer = styled.div`
    background-color: #FFFFFF;
    padding: 20px 20px;
    border-radius: 10px;
    margin-top: 5px;

    &:first-child {
        margin-top: 0px;
    }

    h4 {
        font-size: 14px;
        font-weight: 400;
        color: #7A7A7A;
        margin-bottom: 15px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        row-gap: 15px;
        column-gap: 20px;
        margin: 0px;
        padding: 0px;

        li {
            display: flex;
            gap: 30px;
            margin: 0px;
            padding: 0px;

            b {
                font-size: 14px;
                font-weight: 400;
                color: #7A7A7A;
                min-width: 100px;
            }

            span {
                font-size: 14px;
                font-weight: 300;
                color: #474747;
            }


            @media screen and (min-width: 720px) {
                width: calc(50% - 20px);
            }
        }
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 40px;
        padding: 0px 25px;
        border-radius: 20px;
        background-color: #12B76A;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            font-weight: 400;
            color: #EEEEEE;
        }
    }
`;


export const PermissionsWrapper = styled.div`
    h3 {
        font-size: 14px;
        color: #7A7A7A;
        margin-bottom: 8px;
        font-weight: 600;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        height: 40px;
        padding: 0px 20px;
        border-radius: 6px;
        color: transparent;
        border: 1.5px solid #0094BA;

        span {
            font-size: 13px;
            color: #0094BA;
            font-weight: 300;
        }
    }
`;