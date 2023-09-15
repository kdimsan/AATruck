import { Container } from "./styles";

interface ConfirmButtonProps {
    title: string;
    hidden?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ConfirmButton({ title, hidden, onClick }: ConfirmButtonProps) { 
    return (
        <Container hidden={hidden} onClick={ onClick }>
            {title}
        </Container>
    )
}