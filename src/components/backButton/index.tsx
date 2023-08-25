import { useNavigate } from "react-router-dom"
import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

export function BackButton() {

    const navigate = useNavigate();

    const handlePreviousPage = () => {
        navigate(-1);
    }
    return ( 
        <Container onClick={ handlePreviousPage }>
            <FiChevronLeft />
            <span>Voltar</span>
        </Container>
    )
}