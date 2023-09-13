import { Container } from "./styles";

interface ConfirmButtonProps {
    title: string;
    hidden?: boolean;
    onClick?: () => void;
}

export function ConfirmButton({ title, hidden, onClick }: ConfirmButtonProps) { 
    return (
        <Container hidden={hidden} onClick={ onClick }>
            {title}
        </Container>
    )
}