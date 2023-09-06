import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AddWork } from "../../components/addWork";
import { Container } from "./styles";
import { BackButton } from "../../components/backButton";

export function CreateServices() {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <Container>
            <Header />
            <BackButton onClick={handleBackButton} />
            <main>
                <AddWork />
            </main>
            <Footer />
        </Container>
    )
}