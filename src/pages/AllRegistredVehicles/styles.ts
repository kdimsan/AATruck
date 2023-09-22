import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    animation: movein 0.5s ease-in;

    >.move-out {
        animation: moveout 0.5s;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    >main {
        flex: 1;
        >button {
            margin: 2rem 1.5rem;
        }
    }

    @media(min-width: 1024px) {
        
        >main{
            margin: 0 5rem;
        }  
    }
`;
