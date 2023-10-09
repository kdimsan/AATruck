import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Container onClick={onClick}>
      <FiChevronLeft />
      <span>Previous</span>
    </Container>
  );
}
