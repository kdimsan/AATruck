import { styled } from "styled-components";

export const Container = styled.div`
    min-width: 15rem;

    animation: fadein 1s;

    border-radius: 5px;

    box-shadow: 1px 1px 5px 1px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};

    >.fadeout {
        animation: fadeout .5s;
    }

    >li {
        display: flex;
        flex-direction: column;
        
        list-style: none;
        
        padding: 1rem 1rem;

        position: relative;

        >h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;
        }

        >span {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
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

    }

    @media(max-width: 353px) { 
        min-width: 20rem;
    }

    @media(min-width: 1024px) {
        min-width: 16rem;
        
        >li {
            >h4 {
                font-size: 1.4rem;
            }

            >span {
                font-size: 1.4rem;
            }

            >button{
                top: 4px;
                right: 2px;
                
                >svg {
                    width: 1.7rem;
                    height: 1.7rem;
                }
            }
        }  
    }

    @media(min-width: 1300px) {
        min-width: 18rem;

        >li {
            >h4 {
                font-size: 1.6rem;
            }

            >span {
                font-size: 1.5rem;
            }
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