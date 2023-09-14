import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0 2rem;
    >h1 {  
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    >button {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};

        margin-top: .5rem;
        padding: .5rem ;

        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
        background-color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
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
`;

export const Service = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`;