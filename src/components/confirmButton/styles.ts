import { styled } from "styled-components";

export const Container = styled.button`
    padding: 6px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color:${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};

    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON};

    cursor: pointer;
`;