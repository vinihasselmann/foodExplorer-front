import styled from "styled-components";

export const Container = styled.div`


    padding: 0 123px;
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    gap: 32px;
    background: #00111A;
    
    grid-area: header;

    >.menu-mobile {
        display: none;
    }

    > .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #00111A;
        h1 {
            font-size: 25px;
            width: max-content;     
        }
    }

    div {
        background: #0D1D25;
        border: none;
    }

    > button {
        width: 216px;
        white-space: nowrap;    
    }

    > .buttonText {
        background: transparent;
        border: none;
        font-weight: 400;
        font-size: 14px;
        color: #C4C4CC;
    }

    > .logout {
        background: transparent;
        border: none;
        padding-top: 36px;
        padding-bottom: 36px;
        display: flex;
        align-items: center;
        width: 32px;
        height: 32px;

        svg {
            font-size: 32px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    @media(max-width: 1000px) {
        width: 120%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 130px;
        
        button {
            display: none;
        }

        .logout {
            display: none;
        }

        > .logo {
            display: none;
        }

        .menu-mobile {
            
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;