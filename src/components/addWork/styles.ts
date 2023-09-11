import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 8px;

    >h1 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.3rem;
        color: ${({theme}) => theme.COLORS.TITLES_FONT};

        margin-bottom: 1rem;
    }
    
    >p { 
        margin: 1.5rem 0 8px 0;

        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
    }
`;

export const AddedWork = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
`;