import { useState } from "react";
import { Container, PagesSection, Content } from "./styles";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home() {

    const navigate = useNavigate();
    const [moveOut, setMoveOut] = useState(false);

    /*const findByVin = () => { 
        navigate("/services-search");
    }

    const selectServices = () => {
        navigate("/select-services");
    } */
// fazer a verificação de qual página foi clicada por um value
    const handleRoutes = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate("/select-services");
        }, 300);
    };



    return (
        <Container>
            <Content 
                className={ moveOut ? "move-out" : "" }
                onAnimationEnd={() => setMoveOut(false)} 
            >
                <Header />
                    <main>
                        <h1>Home</h1>
                        <PagesSection>
                            <a onClick={ handleRoutes }>Select work to do</a>
                            <a onClick={ handleRoutes }>Find Work by VIN</a>
                            <a onClick={ handleRoutes }>Select</a>
                        </PagesSection>
                    </main>
                <Footer />
            </Content>
        </Container>
    )
}