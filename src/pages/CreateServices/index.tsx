import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AddWork } from "../../components/addWork";
import { Container } from "./styles";

export function CreateServices() {
    return (
        <Container>
            <Header />
            <main>
                <AddWork />
            </main>
            <Footer />
        </Container>
    )
}