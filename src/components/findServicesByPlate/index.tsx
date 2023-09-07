import { useState } from "react";

import { Container } from "./styles";
import { ServicesHistory } from "../servicesHistory";


export function FindServicesByPlate() {

    const [plate, setPlate] = useState("");

    return(
        <Container>
            <label htmlFor="plate">Search by plate</label>
            <input
                onChange={ (e) => setPlate(e.target.value) }
                id="plate" 
                type="text" 
                placeholder="Insert the plate" 
            />
            <h2>Services done</h2>
            <ServicesHistory value={plate} />
        </Container>
    )
}