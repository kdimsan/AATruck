import { styled } from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;

    background: none;
    border: none;

    cursor: pointer;

    >svg { 
        width: 2rem;
        height: 2rem;
    }

    >span {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.PREVIOUS_BUTTON_FONT};
    }

    @media(min-width: 650px) and (max-width: 912px) {
        >svg {
            width: 2.6rem;
            height: 2.6rem;
        }

        >span {
            font-size: 3.2rem;
        }
    }

    @media(min-width: 1024px) {
        >svg {
            width: 2.2rem;
            height: 2.2rem;
        }
        >span {
            font-size: 2.7rem;
        }
    }
`;