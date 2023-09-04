import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem 0;

    >h2 {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Noto Sans', sans-serif;
        font-size: 1.4rem;
    }

`;

export const History = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    padding: 1rem;

    border-radius: .5rem;

    >li {
        display: flex;
        flex-direction: column;

        list-style: none;

        padding: 1rem 1rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIST_FONT};

        border: 1px solid ${({theme}) => theme.COLORS.LIST_BORDER};
        border-radius: .5rem;
    }
`;