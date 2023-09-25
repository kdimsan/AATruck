import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const History = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 1.7rem;

    padding: 1rem;

    border-radius: .5rem;

    >li {
        display: flex;
        flex-direction: column;

        list-style: none;

        padding: 1rem 1rem;

        border-radius: .5rem;

        box-shadow: 0px 0px 5px 1px ${({theme}) => theme.COLORS.SHADOW_CARD_COLOR};

        >h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: 600;
            color: ${({theme}) => theme.COLORS.LIST_FONT};

            >span {
                font-family: 'Poppins', sans-serif;
                font-size: 1.3rem;
                font-weight: 500;
                color: ${({theme}) => theme.COLORS.LIST_FONT};
            }
        }
    }
    //mobiles
    @media(min-width: 190px) and (max-width: 465px) {
        justify-content: center;
    }
    //tablet
    @media(min-width: 650px) and (max-width: 912px) {
        gap: 2.4rem;

        >li {
            >h3 {
                font-size: 2.1rem;
                >span {
                    font-size: 2rem;
                }
            }
        }
        
    }
    //desktop
    @media(min-width: 1024px) {
        >li {
            padding: 1rem 2rem 1rem 1rem;

            >h3 {
                font-size: 1.5rem;

                >span {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;