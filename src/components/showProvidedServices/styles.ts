import { styled } from "styled-components";

export const Container = styled.div`

  animation: fadein 1s;

  border-radius: 5px;

  margin: 2rem;

  box-shadow: 1px 1px 5px 1px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};

    >.fadeout {
        animation: fadeout .5s;
    }

    >li {
        display: flex;
        flex-direction: column;
        
        list-style: none;
        
        padding: .25rem .5rem;

        border: 2px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        position: relative;

        >h4 {
            font-size: 1.3rem;
        }

        >span {
            font-size: 1.3rem;
        }

        >button {
            width: 1.7rem;
            height: 1.7rem;
            border: none;
            background: none;

            position: absolute;
            top: .4rem;
            right: .2rem;

            cursor: pointer;

            >svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        @media(min-width: 1024px) {
            padding: .5rem 1rem;
            
           >h4 {
                font-size: 1.5rem;
            }
        }
    }

    @media(min-width: 1024px) {
        margin: 0;
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
`;