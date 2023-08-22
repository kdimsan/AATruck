import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;

    padding: 0 2rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

    font-family: 'IBM Plex Sans', sans-serif;
    font-style: italic;
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.HEADER_FONT};

    >button {
        width: 2.4rem;
        height: 2.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: none;
        
        >svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }
    >h1 {
        margin: 0 auto;
    }
`;