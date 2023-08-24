import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;

    padding: 0 2rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

    .icon { 
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
        
        >svg {
            width: 2rem;
            height: 2rem;
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
    
    animation: fadeinSidebar .5s ease-in;

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
        
            >svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }

    >.sidebar-content {
        padding: 2rem;
        >li {
            list-style: none;

            font-size: 2rem;
            font-family: 'Noto Sans', sans-serif;

            margin-bottom: 1.2rem;

            border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
        }
    }

    @keyframes fadeinSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 80%;
        }
    }

    @keyframes fadeoutSidebar {
        from {
            opacity: 1;
            width: 80%;
        }
        to {
            opacity: 0;
            width: 0;
        }
    }
`;