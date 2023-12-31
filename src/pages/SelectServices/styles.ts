import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    animation: movein 0.5s ease-in;

    >.move-out {
        animation: moveout 0.5s ease-in;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    >main { 
        flex: 1;

    }

    @media(min-width: 600px) and (max-width: 1023px) {
        >main {
            margin: 0 2rem;
        }
    }
    @media(min-width: 1024px) {
            >main{ 
                margin: 0 5rem;
            }
        }

`;