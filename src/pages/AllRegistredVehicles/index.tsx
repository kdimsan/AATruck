import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RegistredVehicles } from "../../components/registredVehicles";
import { Container, Content } from "./styles";

export function AllRegistredVehicles() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    return(
        <Container>
            <Content>
                <Header />
                <main>
                    <BackButton onClick={ handleGoBack }/>
                    <RegistredVehicles />
                </main>
                <Footer />
            </Content>
        </Container>
    )
}