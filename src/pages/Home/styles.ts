import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    >main { 
        display: flex;
        flex-direction: column;
        flex: 1;

        margin: 2rem;

        >h1 {
            font-family: 'Noto Sans', sans-serif;
            font-weight: 600;
            color: ${({theme}) => theme.COLORS.LIST_FONT};
        }

    }

`;

export const PagesSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin: 1rem .5rem;
    padding: 2rem;
    gap: 2rem;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.8rem;

    border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
    border-radius: .5rem;

    >a {
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    }
`;