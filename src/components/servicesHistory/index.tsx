import { Container, History } from "./styles";

interface ServicesHistoryProps {
    value: string;
}

export function ServicesHistory( { value }: ServicesHistoryProps ) {
    return (
        <Container>

            {value ? <h2>Vin: { value }</h2> : ""}
            
            <History>
                <li>
                    <span>Service: Wax</span>
                    <span>Price: U$ 45,00</span>
                </li>
                <li>
                    <span>Service: Wax</span>
                    <span>Price: U$ 45,00</span>
                </li>
                <li>
                    <span>Service: Wax</span>
                    <span>Price: U$ 45,00</span>
                </li>
                <li>
                    <span>Service: Wax</span>
                    <span>Price: U$ 45,00</span>
                </li>
            </History>
        </Container>
    )
}