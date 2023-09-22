import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin: 0 2rem;
    
    @media(min-width: 1024px) {
        display: grid;
        grid-template-areas: "a b";
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
`;

export const Form = styled.form`
    >h1 {
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.3rem;
        color: ${({theme}) => theme.COLORS.TITLES_FONT};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        margin-bottom: 3rem;

        @media(min-width: 1024px) {
            font-size: 3rem; 
        }
    }

    >button {
        margin-top: 1rem;
    }
    
    >button:hover {
        box-shadow: 0px 0px 8px ${({theme}) => theme.COLORS.CONFIRM_BUTTON};
    }

    @media(min-width: 1024px) {
        min-width: 50rem;
        max-width: 55rem;
    }
`;

export const AddedWork = styled.div`
    >p { 
        margin: 2rem 0;

        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        font-style: italic;
    }

   >div {
        display: flex;
        flex-wrap: wrap;
        gap: 1.4rem;
    }

   @media(min-width: 1024px) {
        margin-top: 3rem;

        >div {
            gap: 1.6rem;
        }
   }
`;