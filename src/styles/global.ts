import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

body{
    background-color: ${({theme}) => theme.COLORS.BODY_BACKGROUND};
}

@keyframes movein {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes moveout {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(200%);
        }
    }
`;