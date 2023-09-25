import { styled } from "styled-components";

export const Container = styled.div`

    @media(min-width: 1024px) {
        display: grid;
        grid-template-areas: "a b";
        grid-template-columns: 1fr 1fr;

        margin: 0;
    }
`;

export const Content = styled.div`
    margin: 0 2rem;

    >h1 {  
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        @media(min-width: 1024px) {
            font-size: 3rem;
        }
    }
    
    @media(min-width: 1024px) {
        min-width: 50rem;
        max-width: 70rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin: 2rem 0;
    
    >button {
        margin-top: 1rem;
    }
`;

export const ConfirmedServices = styled.div`
    margin: 0 3rem;

    >p { 
        margin-bottom: 2rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        font-style: italic;
    }

    @media(min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        margin: 5rem 0 0 2rem;
        max-width: 65rem;
    }
`;

export const Service = styled.div` 
    display: flex;
    flex-wrap: wrap;

    gap: 1.4rem;
`;