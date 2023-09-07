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
        margin: 1rem;
    }
`;