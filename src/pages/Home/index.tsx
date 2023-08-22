import { Container } from './styles';

import { Header } from "../../components/header";
import { ProvidedServices } from '../../components/providedServices';
import { Footer } from "../../components/footer";

export function Home() {
    
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