import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    animation: movein 0.5s ease-in;

    >.move-out {
        animation: moveout 0.5s;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    >button {
            margin: 2rem 1.5rem;
    }

    >main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;

