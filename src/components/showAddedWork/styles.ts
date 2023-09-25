import { styled } from "styled-components";

export const Container = styled.div`
    animation: fadein 1s;

    max-width: 30rem;

    >.fadeout {
            animation: fadeout .5s;
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(5rem);
        }
    }

    @keyframes fadein {
        0% {
            opacity: 0;
            transform: translateX(-5rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem 2.5rem 1rem 1.5rem;

    border-radius: 5px;

    box-shadow: 1px 1px 5px 2px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};

    position: relative;

    >h4 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
    }

    >span {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
    }

    >button {
        width: 1.7rem;
        height: 1.7rem;
        border: none;
        background: none;

        position: absolute;
        top: 4px;
        right: 2px;

        cursor: pointer;

        >svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    @media(min-width: 600px) and (max-width: 1023px) {
        >h4 {
            font-size: 1.7rem;
        }
        >span {
            font-size: 1.6rem;
        }

        >button {
            >svg {
                width: 1.7rem;
                height: 1.7rem;
            }
        }
    }

    @media(min-width: 1024px) {
        >h4 {
            font-size: 1.5rem;
        }

        >span { 
            font-size: 1.4rem;
        }

        >button{
            >svg {
                width: 1.7rem;
                height: 1.7rem;
            }
        }
    }

    @media(min-width: 1300px) {
        >h4 {
            font-size: 1.6rem;
        }

        >span { 
            font-size: 1.5rem;
        }
    }
`;