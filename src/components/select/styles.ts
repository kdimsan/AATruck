import styled from "styled-components";

export const SelectContent = styled.div`
    display: flex;
    flex-direction: column;
    
    >label {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        margin-bottom: .3rem;
    }

    >select{
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};

        padding: .3rem;
        margin-bottom: .5rem;

        background-color: ${({theme}) => theme.COLORS.SELECT_BACKGROUND};
        border: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
        border-radius: .5rem;
    }

    >select:focus {
        outline: 2px solid #c9c9c9;
    }
    
    >select:hover {
            outline: 2px solid #c9c9c9;
    }
`;