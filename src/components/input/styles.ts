import styled from "styled-components";

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    
    >input {
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        padding: .5rem 1rem;
        margin-bottom: 1rem;

        background-color: ${({theme}) => theme.COLORS.SELECT_BACKGROUND};
        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem;
    }

    >input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

    >input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    >input:focus {
        outline: 2px solid #c9c9c9;
    }
    
    >input:hover {
        outline: 2px solid #c9c9c9;
    }
    
    >label {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;

        margin-bottom: 3px;
    }

    @media(min-width: 600px) and (max-width: 1023px) {
        >input {
            padding: .5rem 1.5rem;

            font-size: 1.8rem;
        }

        >label {
            font-size: 2rem;
        }
    }

    @media(min-width: 1024px) {
        >input {
            padding: .5rem 1.5rem;

            font-size: 1.5rem;
        }

        >label {
            font-size: 1.7rem;
        }
    }
`;