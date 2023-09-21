import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    animation: movein 0.5s ease-in;

    >.move-out {
        animation: moveout 0.5s;
    }
`;

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
    >main { 
        display: flex;
        flex-direction: column;
        flex: 1;

        margin: 2rem 4rem;

        >h1 {
            font-family: 'Noto Sans', sans-serif;
            font-size: 2.5rem;
            font-weight: 600;
            color: ${({theme}) => theme.COLORS.LIST_FONT};
        }
    }
`;


export const PagesSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin: 1rem 0;
    padding: 3rem 2rem;
    gap: 2rem;

    border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
    border-radius: .5rem;

    cursor: pointer;

    @media(min-width: 1024px) {
        gap: 3rem;
    }

    >a {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        @media(min-width: 1024px) {
            font-size: 2rem;
        }
    }
`;