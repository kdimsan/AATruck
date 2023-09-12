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
           <Input 
                labelText="Write the plate"
                htmlFor="plate"
                id="plate"
                type="text"
                placeholder="ABC-123"
                onChange={ handlePlateInput }
           />
            <h2>Services done</h2>
            <ServicesHistory value={plate} />
        </Container>
    )
}