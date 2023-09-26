import { styled } from "styled-components";

export const Container = styled.div`
`;

export const VehicleInformation = styled.div`
    margin: 1rem 0;

    >h2 {
        font-family: 'Noto Sans',sans-serif;
        font-size: 1.7rem;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};
    }

    @media(min-width: 1024px) {
        margin: 3rem 0;
        
        >h2 {
            font-size: 2.1rem;
        }
    }
`;

export const Content = styled.div`
    margin: 1rem .5rem 0;

    >h3 {
        margin: 3px 0;

        font-family: 'Poppins',sans-serif;
        font-size: 1.3rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.VEHICLE_INFO_FONT};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};

        >span {
            font-weight: 500;
        }
    }

    @media(min-width: 1024px) {
        margin: 1rem 1.3rem;

        >h3 {
            font-size: 1.6rem;
        }
    }
`;