import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BackButton } from "../../components/backButton";
import { ProvidedServices } from "../../components/provideServices";


export function SelectServices() {
    
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
                onAnimationEnd={ () => setMoveOut(false) }
            >
                <Header />
                <BackButton onClick={ handleRoute } />
                <main>
                    <ProvidedServices />
                </main>
                <Footer />
            </Content>
        </Container>
    )
}