import { Container, ServicesHistory } from "./styles";

export function ServicesByVin() {
    return(
        <Container>
            <label htmlFor="vin">Search the VIN</label>
            <input id="vin" type="text" placeholder="Insert the vin" />
            
            <h2>Services done</h2>

            <ServicesHistory>
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
            </ServicesHistory>
        </Container>
    )
}