import { styled } from "styled-components";

export const Container = styled.div`

    margin: 0 auto;

    font-family: 'IBM Plex Sans', sans-serif;
    font-style: italic;
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.HEADER_FONT};
    white-space: nowrap;
`;