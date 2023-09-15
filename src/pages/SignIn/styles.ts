import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;

    >main {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;

        margin: 10rem 5rem;
        padding: 1rem;
        
        border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        border-radius: 5px;

        >h1 {
            font-family: 'Noto Sans', sans-serif;
            font-size: 2.4rem;
            color: ${({theme}) => theme.COLORS.LOGIN_FONT};
        }

        >button {
            width: 100%;
            max-width: 30rem;
            padding: 6px;

            border: 1px dotted ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
            border-radius: 5px;
            background-color: ${({theme}) => theme.COLORS.LIGHT_400};
            
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 30rem;

    margin: 2rem 0;

    .error-style {
        font-family: 'Nato Sans', sans-serif;
        color: red;
        margin-top: -5px;
    }
`;
