import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 8px;

    >label {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.8rem;
        margin-bottom: .5rem;
    }

    >input {
        padding: .5rem;

        font-family: 'Poppins', sans-serif;

        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem;
    }

    >h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.H2_FONT};

        margin: 1.5rem 0 1rem 0;
    }

    >h3 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.7rem;
        color: ${({theme}) => theme.COLORS.H2_FONT};

        margin: 1.5rem 0 .5rem 0;
    }
`;

export const ServicesHistory = styled.div`
   
`;
