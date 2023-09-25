import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    
    padding: 6px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color:${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};

    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON};

    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 5px ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
    }

    @media(min-width: 600px) and (max-width: 1023px) {
        font-size: 1.7rem;
    }

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;