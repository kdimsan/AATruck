import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin: 0 5rem;

    >h1 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.3rem;
        color: ${({theme}) => theme.COLORS.TITLES_FONT};

        margin-bottom: 1rem;
    }

    >input {
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        padding: .5rem 1rem;
        margin-bottom: 1rem;

        background-color: ${({theme}) => theme.COLORS.SELECT_BACKGROUND};
        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem
    }

    >label {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;

        margin-bottom: 3px;
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

    >span {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;

        padding: 3px 5px;

        border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        border-radius: 5px;
    }
`;