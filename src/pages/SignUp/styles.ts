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

        margin: 8rem 4rem;
        padding: 1rem;
        
        border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        border-radius: 5px;
        .logo {
            margin: auto;
            font-family: 'IBM Plex Sans', sans-serif;
            font-style: italic;
            font-size: 1.6rem;

            @media(max-width: 1023px) {
                display: none;
            }
        }

        @media(min-width: 1024px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            margin: 7rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    >h1 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LOGIN_FONT};
    }

    >button {
        width: 100%;
        max-width: 30rem;
        padding: 6px;

        border: none;
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.LIGHT_400};
        
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};

        cursor: pointer;
    }

    >button:hover {
        box-shadow: 0px 0px 8px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 30rem;

    margin: 2rem 0;

    >div {
        margin-bottom: 5px ;
    }

    >button:hover {
        box-shadow: 0px 0px 8px ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
    }

    .error-style {
        font-family: 'Nato Sans', sans-serif;
        color: red;
        margin-top: -5px;
    }
`;
