import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ServicesByPlate } from "../../components/servicesByPlate";

export function ServicesSearch() {
    return (
        <Container>
            <Header />
            <main>
                <ServicesByPlate /> 
            </main>
            <Footer />
        </Container>
    );
}