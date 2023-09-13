import { Container } from "./style";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../../components/backButton";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { VehicleRegistration } from "../../components/vehicleRegistration";

export function RegisterVehicle() {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Header/>
            <BackButton onClick={ handleBackButton }/>
            <main>
                <VehicleRegistration/>
            </main>
            <Footer/>
        </Container>
    )
}