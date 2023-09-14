import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AddWork } from "../../components/addWork";
import { BackButton } from "../../components/backButton";
import { Container, Content } from "./styles";

export function CreateServices() {
    const navigate = useNavigate();
    const [moveOut, setMoveOut] = useState(false);

    const handleBackButton = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate(-1);
        }, 400);
    }
    return (
        <Container>
            <Content 
                className={ moveOut ? "move-out" : "" }
                onAnimationEnd={() => setMoveOut(false)} 
            >
                <Header />
                <BackButton onClick={handleBackButton} />
                <main>
                    <AddWork />
                </main>
                <Footer />
            </Content>
        </Container>
    )
}