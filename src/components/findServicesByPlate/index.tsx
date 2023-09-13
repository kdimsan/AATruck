import { useState } from "react";

import { Container } from "./styles";
import { ServicesHistory } from "../servicesHistory";
import { Input } from "../input";

export function FindServicesByPlate() {

    const [plate, setPlate] = useState("");

    const handlePlateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlate(e.target.value);
    };

    return(
        <Container>
            <h2>Find services by vehicle plate</h2>
           <Input 
                labelText="Write the vehicle plate:"
                htmlFor="plate"
                id="plate"
                type="text"
                placeholder="ABC-123"
                onChange={ handlePlateInput }
           />
            <h3>Services done</h3>
            <ServicesHistory value={plate} />
        </Container>
    )
}