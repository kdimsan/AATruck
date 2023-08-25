import { Container, PagesSection } from "./styles";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home() {

    const navigate = useNavigate();

    const handleSelectServicesRoute = () => {
        navigate("/select-services");
    }


    return (
        <Container>
            <Header />
            <main>
               <h1>Home</h1>
               <PagesSection>
                <a onClick={ handleSelectServicesRoute }>Select Work</a>
                <a onClick={ handleSelectServicesRoute }>Find Work by VIN</a>
                <a onClick={ handleSelectServicesRoute }>Select</a>
               </PagesSection>
            </main>
            <Footer />
        </Container>
    )
}