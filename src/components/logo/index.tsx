import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Logo() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

    return (
        <Container onClick={ handleHome }>
            <h1>AA Truck</h1>
        </Container>
    );
}