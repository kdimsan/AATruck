import { useState } from "react";
import { Container, PagesSection, Content } from "./styles";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home() {

    const navigate = useNavigate();
    const [moveOut, setMoveOut] = useState(false);

    const handleServicesSearch = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate("/services-search");
        }, 300);
    };

    const handleCreateServices = () => {
        setMoveOut(true);
        setTimeout(() => {
            navigate("/create-service");
        }, 300);
    }; 

    const handleSelectServices = () => {
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
                        <a onClick={ handleSelectServices }>Select work to do</a>
                        <a onClick={ handleServicesSearch }>Find Work by vehicle plate</a>
                        <a onClick={ handleCreateServices }>Create a work</a>
                    </PagesSection>
                </main>
                <Footer />
            </Content>
        </Container>
    )
}