import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    >label {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.8rem;
        margin-bottom: .5rem;
    }

    >input {
        width: 80%;

        padding: .5rem;
        margin: 0 1rem;

        font-family: 'Poppins', sans-serif;

        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem;
    }

    >h2 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.7rem;
        color: ${({theme}) => theme.COLORS.H2_FONT};

        margin: 1.5rem 0 .5rem 0;
    }
`;

export const ServicesHistory = styled.div`
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
