import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem 5px;

    border: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
    border-radius: 3px;

    >h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};

        margin-bottom: 4px;
    }
    >h4 {
        font-family: 'Poppins', sans-serif;
        line-height: 1.3rem;
    }

    >span {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 400;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.HOME_SECTION_BORDER};
        margin-bottom: 4px;
    }
`;
