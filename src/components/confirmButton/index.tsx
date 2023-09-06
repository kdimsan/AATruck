import { Container } from "./styles";

interface ConfirmButtonProps {
    title: string;
    onClick?: () => void;
}

export function ConfirmButton({ title, onClick }: ConfirmButtonProps) { 
    return (
        <Container onClick={ onClick }>
            {title}
        </Container>
    )
}