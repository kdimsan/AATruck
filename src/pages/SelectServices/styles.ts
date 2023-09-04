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

    margin: 1rem;

    >main { 
        flex: 1;
        margin: 1rem;
    }
`;

export const BackButton = styled.button`
    
`;