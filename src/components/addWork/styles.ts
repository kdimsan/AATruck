import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 3rem 5rem;

    >h1 {
            font-family: 'Noto Sans', sans-serif;
            color: ${({theme}) => theme.COLORS.LIST_FONT};
    }

    >input {
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        padding: .5rem 1rem;
        margin-bottom: .5rem;

        background-color: ${({theme}) => theme.COLORS.SELECT_BACKGROUND};
        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem
    }

    >label {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        margin-bottom: .3rem;
    }
`;

export const AddedWork = styled.div``;