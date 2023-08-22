import { Container } from "./styles";

import { GrMenu } from "react-icons/gr";

export function Header() {
    return (
        <Container>
            <button><GrMenu /></button>
            <h1>AA Truck </h1>
        </Container>
    );
}