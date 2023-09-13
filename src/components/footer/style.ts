import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    min-height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3rem;

    border-top: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    
    >h1 {
        font-family: 'IBM Plex Sans', sans-serif;
        font-style: italic;
        font-size: 1.5rem;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        margin: 0 1.5rem;
    }

    >p {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        margin: 0 1.5rem;
    }
`;
