import styled from "styled-components";

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    
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
`;