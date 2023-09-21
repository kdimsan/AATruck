import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0 2rem;

    @media(min-width: 1024px) {
        display: grid;
        grid-template-areas: "a b";

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
        max-width: 50rem;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin: 2rem 0;
    
    >button {
        margin-top: 1rem;
    }
    >button:hover {
        box-shadow: 0px 0px 8px ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
    }
`;

export const ConfirmedServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins', sans-serif;

    >h2 { 
        font-size: 1.8rem;
    }

    >h3 {
        font-weight: 400;
    }

    @media(min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        margin: 1rem;
    }
`;

export const Service = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media(min-width: 1024px) {
        grid-gap: 2rem;
    }
`;