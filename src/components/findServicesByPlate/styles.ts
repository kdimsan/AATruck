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
   
`;