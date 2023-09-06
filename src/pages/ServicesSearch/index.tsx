import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FindServicesByPlate } from "../../components/findServicesByPlate";

export function ServicesSearch() {
    return (
        <Container>
            <Header />
            <main>
                <FindServicesByPlate /> 
            </main>
            <Footer />
        </Container>
    );
}