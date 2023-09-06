import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { ServicesHistory } from "../servicesHistory";
import { BackButton } from "../backButton";

export function FindServicesByPlate() {

    const navigate = useNavigate();
    const [plate, setPlate] = useState("");

    const handleBack = () => {
        navigate(-1);
    }

    return(
        <Container>
            <BackButton onClick={handleBack} />
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