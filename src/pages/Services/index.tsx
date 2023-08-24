import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProvidedServices } from "../../components/providedServices";

export function Services() { 
    return (
        <Container>
            <Header />
            <main>
                <ProvidedServices />
            </main>
            <Footer />
        </Container>
    )
}