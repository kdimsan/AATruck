import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 2rem;

    >h1 {
        font-family: 'Noto Sans',sans-serif;
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        margin-bottom: 1.5rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    }

    >button { 
        margin: 1rem 0 2rem;
    }

    .vehicle-registred {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

    }
`;