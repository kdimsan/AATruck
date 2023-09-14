import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem 2rem; 

    >h1 {
        font-family: 'Noto Sans', sans-serif;

        margin-bottom: 1rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        color: ${({theme}) => theme.COLORS.TITLES_FONT};
    }

    >h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-style: italic;
        font-size: 1.2rem;

        margin: 2rem 0 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin-bottom: 1rem;

    border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.LIST_FONT};

    >h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        margin-bottom: 1rem;
    }

    >h4 {

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        line-height: 1.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};

        >span {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
`;