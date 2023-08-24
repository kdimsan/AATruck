import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ServicesByVin } from "../../components/servicesByVin";

export function ServicesSearch() {
    return (
        <Container>
            <Header />
            <main>
                <ServicesByVin /> 
            </main>
            <Footer />
        </Container>
    );
}