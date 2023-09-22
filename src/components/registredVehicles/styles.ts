import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 2rem; 

    @media(min-width: 1024px) {
        display: grid;
        grid-template-areas: "a b";
        grid-template-columns: 1fr 2fr;
        gap: 3rem;
    }
`;

export const FounderHolder = styled.div`
    
    >h1 {
        font-family: 'Noto Sans', sans-serif;

        margin-bottom: 1rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};

        color: ${({theme}) => theme.COLORS.TITLES_FONT};
    }

    >h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-style: italic;
        font-size: 1.2rem;

        margin-bottom: 3rem;
    }

    @media(min-width: 600px) and (max-width: 1023px) {
        >h1 {
            font-size: 2.4rem;
        }
    }

    @media(min-width: 1024px) {
        min-width: 45rem;
        max-width: 50rem;

        >h1 {
            font-size: 3rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2rem 0;

    >div {
        padding: 1rem;
        margin-bottom: 2rem;

        border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        border-radius: 5px;

        color: ${({theme}) => theme.COLORS.LIST_FONT};
        box-shadow: 1px 2px 5px 1px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};

        >h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;

            border-bottom: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
            margin-bottom: 1rem;
        }

        >h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            line-height: 1.4rem;

            margin-bottom: 1rem;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};

            >span {
                font-family: 'Poppins', sans-serif;
                font-size: 1.3rem;
                font-weight: 400;
            }
        }
    }

    @media(min-width: 600px) and (max-width: 1023px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        >div{
            padding: 1.6rem;
            margin-bottom: 0;

            >h3 {
                font-size: 1.7rem;
            }

            >h4 {
                font-size: 1.6rem;
                line-height: 1.6rem;

                >span {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media(min-width: 1024px) {

        margin: 5rem 0 0; 

        >div{
            padding: 1.6rem;

            >h3 {
                font-size: 1.7rem;
            }

            >h4 {
                font-size: 1.6rem;
                line-height: 1.6rem;

                >span {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media(min-width: 1300px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;


        >div {
            margin-bottom: 0;
        }
    }

    @media(min-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;