import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RegistredVehicles } from "../../components/registredVehicles";
import { Container, Content } from "./styles";

export function AllRegistredVehicles() {
    const navigate = useNavigate();

    const [moveOut, setMoveOut] = useState(false);

    const handleRoute = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate(-1);
        }, 400);
    };
    return(
        <Container>
            <Content
                className={ moveOut ? "move-out" : "" }
                onAnimationEnd={() => setMoveOut(false)} 
            >
                <Header />
                <main>
                    <BackButton onClick={ handleRoute }/>
                    <RegistredVehicles />
                </main>
                <Footer />
            </Content>
        </Container>
    )
}