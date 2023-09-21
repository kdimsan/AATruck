import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    min-height: 10rem;

    display: flex;
    align-items: center;

    padding: 0 2rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

    @media(min-width: 1024px) {
        padding: 0 5rem;
    }

    >.side-out {
        animation: sidebarOut 0.4s ease-in-out;
    }

    >.icon { 
        color: ${({theme}) => theme.COLORS.ICON_COLOR};
    }

    >button {
        width: 2rem; 
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: none;

        cursor: pointer;
        
        >svg {
            width: 2rem;
            height: 2rem;
        }
    }

    @keyframes sidebarOut {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

`;

export const Sidebar = styled.div`
    position: fixed;
    
    width: 80%;

    height: 100vh;

    z-index: 1;

    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.BODY_BACKGROUND};

    border-top-right-radius: 3rem;
    border-right: 2px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

    top: 0;
    left: 0;
    
    animation: fadeinSidebar .5s ease-in-out;

    @media(min-width: 1024px) {
        width: 30%;
    }

    >.sidebar-header {
       
        height: 10rem;

        display: flex;
        align-items: center;

        padding: 0 2rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        >button {
            width: 2.4rem;
            height: 2.4rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: none;
            background: none;

            cursor: pointer;
        
            >svg {
                width: 2rem;
                height: 2rem;
            }
        }

        >div {
            @media(min-width: 1024px) {
                display: none;
            }
        }
    }

    >.sidebar-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        >a {
            font-size: 2rem;
            font-family: 'Noto Sans', sans-serif;

            margin-bottom: 1.2rem;

            border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

            cursor: pointer;
        }
    }

    @keyframes fadeinSidebar {
        0% {
            transform: translateX(-100%);
        }
        100% {

            transform: translateX(0%);
        }
    }
`;