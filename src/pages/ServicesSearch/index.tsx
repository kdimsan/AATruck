import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FindServicesByPlate } from "../../components/findServicesByPlate";
import { BackButton } from "../../components/backButton";

export function ServicesSearch() {
  const [moveOut, setMoveOut] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    setMoveOut(true);
    setTimeout(() => {
      navigate(-1);
    }, 400);
  };
  return (
    <Container>
      <Content
        className={moveOut ? "move-out" : ""}
        onAnimationEnd={() => setMoveOut(false)}
      >
        <Header />
        <main>
          <BackButton onClick={handleGoBack} />
          <FindServicesByPlate />
        </main>
        <Footer />
      </Content>
    </Container>
  );
}
