import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    >main {
        flex: 1;
    }
`;