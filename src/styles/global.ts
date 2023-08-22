import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({theme}) => theme.COLORS.BODY_BACKGROUND};
}
`;