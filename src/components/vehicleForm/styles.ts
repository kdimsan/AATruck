import { styled } from "styled-components";

export const Container = styled.div`
    margin: 1rem;
`;
    

export const Form = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    >div {
        display: flex;
        flex-direction: column;

        :focus{
                outline: 1px solid ${({theme}) => theme.COLORS.VEHICLE_INFO_FONT};
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            }
        
        >input {
            width: 100%;
            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.HEADER_FONT};

            padding: .3rem;
            margin-bottom: .5rem;

            background-color: ${({theme}) => theme.COLORS.SELECT_BACKGROUND};
            border: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
            border-radius: .5rem; 
        }
    }

    >div >label {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        margin-bottom: .3rem;
    }
`;

    


export const VehicleInformation = styled.div`
    margin: 1rem 0;

    >h2 {
        font-family: 'Noto Sans',sans-serif;
        font-size: 1.7rem;
        color: ${({theme}) => theme.COLORS.HEADER_FONT};
    }

    >div >h3 {
            font-family: 'Poppins',sans-serif;
            font-size: 1.3rem;
            color: ${({theme}) => theme.COLORS.VEHICLE_INFO_FONT};

            border-bottom: 1px solid ${({theme}) => theme.COLORS.HEADER_BORDER};
    }
`;