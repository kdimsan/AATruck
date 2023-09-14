import { useState } from "react";
import { Container, PagesSection, Content } from "./styles";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home() {

    const navigate = useNavigate();
    const [moveOut, setMoveOut] = useState(false);

    const handleRoutes = (route: string) => {
        setMoveOut(true);
        setTimeout(() => {
            navigate(route);
        }, 300);
    };

    const handleAllVehiclesRoute = () => handleRoutes("/registred-vehicles");
    const handleRegisterVehicle = () => handleRoutes("/register-vehicle");
    const handleSelectServices = () => handleRoutes("/select-services");
    const handleCreateServices = () => handleRoutes("/create-service");
    const handleServicesSearch = () => handleRoutes("/services-search");

    return (
        <Container>
            <Content 
                className={ moveOut ? "move-out" : "" }
                onAnimationEnd={() => setMoveOut(false)} 
            >
                <Header />
                <main>
                    <h1>Home</h1>
                    <PagesSection>
                        <a onClick={ handleSelectServices }>Select work to do</a>
                        <a onClick={ handleServicesSearch }>Find Work by vehicle plate</a>
                        <a onClick={ handleCreateServices }>Create a work</a>
                        <a onClick={ handleRegisterVehicle }>Register vehicle</a>
                        <a onClick={ handleAllVehiclesRoute }>All vehicles</a>
                    </PagesSection>
                </main>
                <Footer />
            </Content>
        </Container>
    )
}