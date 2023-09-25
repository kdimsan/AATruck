import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    animation: movein 0.5s ease-in;

    >.move-out {
        animation: moveout 0.5s;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
    >main { 
        flex: 1;

        >button {
            margin: 2rem 1.5rem;
        }
    }

    @media(min-width: 650px) and (max-width: 912px) {
        >main {
            margin: 0 4rem;

            >button {
                margin: 3rem 1.4rem 2rem;
            }
        }
    }

    @media(min-width: 1024px) {
        >main {
            margin: 0 5rem;
        }
    }
`;