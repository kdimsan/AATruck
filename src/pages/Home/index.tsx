import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home() {
    return (
        <Container>
            <Header />
            <main>
               <h1>Home</h1>
            </main>
            <Footer />
        </Container>
    )
}