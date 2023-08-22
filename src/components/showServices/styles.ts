import { styled } from "styled-components";

export const Container = styled.div`

  animation: fadein 1s;

  .fadeout {
            animation: fadeout 1s;
        }

    >li {
        display: flex;
        flex-direction: column;
        
        list-style: none;

        font-size: 1.3rem;
        
        padding: .25rem .5rem;

        border: 2px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        position: relative;

       

        >button {
            width: 1.7rem;
            height: 1.7rem;
            border: none;
            background: none;

            position: absolute;
            top: .4rem;
            right: .2rem;

            >svg {
                width: 1.5rem;
                height: 1.5rem;
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