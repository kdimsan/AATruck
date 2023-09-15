import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 2rem;

    >h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.H2_FONT};
        
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        margin-bottom: 2rem;
    }

    >h3 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.7rem;
        color: ${({theme}) => theme.COLORS.H2_FONT};

        margin: 1.5rem 0 .5rem 0;
    }
`;
