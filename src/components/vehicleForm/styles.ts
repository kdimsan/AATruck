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

    >div >h3 {
        margin: 3px 0;

        font-family: 'Poppins',sans-serif;
        font-size: 1.3rem;
        color: ${({theme}) => theme.COLORS.VEHICLE_INFO_FONT};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.INPUT_BORDER};
    }

    @media(min-width: 1024px) {
        margin: 3rem 0;
        
        >h2 {
            font-size: 2.1rem;
        }

        >div {
            margin: 1rem 1.3rem;
        }
        >div>h3 {
            font-size: 1.6rem;
        }
    }
`;