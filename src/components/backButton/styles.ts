import { styled } from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;

    margin: 3rem 1.6rem 2rem;

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
        margin: 3rem 1.4rem 2rem;

        >svg {
            width: 2.6rem;
            height: 2.6rem;
        }

        >span {
            font-size: 3.2rem;
        }
    }

    @media(min-width: 1024px) {
        margin: 3.5rem 1.4rem 2rem;

        >svg {
            width: 2.2rem;
            height: 2.2rem;
        }

        >span {
            font-size: 2.7rem;
        }
    }
`;