import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 2rem;

    >h1 {
        font-family: 'Noto Sans',sans-serif;
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        margin-bottom: 3rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    }

    >button { 
        margin: 1rem 0 2rem;
    }

    .vehicle-registred {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media(min-width: 730px) {
        >h1 {
            font-size: 3rem;

            margin-bottom: 3rem;
        }

        >form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
`;

export const ButtonsOrganizer = styled.div`
    gap: 1rem;

    margin: 1rem 0 2rem;

    >button {
        font-family: 'Poppins',sans-serif;
        color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON_FONT};
        padding: 5px 1rem;

        border: 1px solid ${({theme}) => theme.COLORS.CONFIRM_BUTTON_BORDER};
        border-radius: 5px;

        background-color: ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
    }
`;