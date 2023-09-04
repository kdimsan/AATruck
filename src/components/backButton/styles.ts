import { styled } from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;

    margin: 2rem 0 1rem;

    background: none;
    border: none;

    cursor: pointer;

    >svg { 
        width: 2.4rem;
        height: 2.4rem;
    }

    >span {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.4rem;
    }
`;