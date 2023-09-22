import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";

import { BackButton } from "../../components/backButton";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { VehicleRegistration } from "../../components/vehicleRegistration";

export function RegisterVehicle() {
    const navigate = useNavigate();

    const [moveOut, setMoveOut] = useState(false);

    const handleRoute = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    return (
        <Container>
            <Content
                className={ moveOut ? "move-out" : "" }
                onAnimationEnd={() => setMoveOut(false)} 
            >
                <Header/>
                <main>
                    <BackButton onClick={ handleRoute }/>
                    <VehicleRegistration/>
                </main>
                <Footer/>
            </Content>
        </Container>
    )
}