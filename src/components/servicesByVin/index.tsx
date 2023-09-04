import { useState } from "react";

import { Container } from "./styles";
import { ServicesHistory } from "../servicesHistory";

export function ServicesByVin() {

    const [vinNumber, setVinNumber] = useState("");

    return(
        <Container>
            <label htmlFor="vin">Search the VIN</label>
            <input
                onChange={ (e) => setVinNumber(e.target.value) }
                id="vin" 
                type="text" 
                placeholder="Insert the vin" 
            />
            <h2>Services done</h2>
            <ServicesHistory value={vinNumber} />
        </Container>
    )
}