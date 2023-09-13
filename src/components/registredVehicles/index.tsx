import { Container } from "./styles";
import { Input } from "../input";

export function RegistredVehicles() { 
    //get na api
    return(
        <Container>
            <h1>Registred vehicles</h1>
            <Input 
                htmlFor="search"
                id="search"
                labelText="Search for a vehicle by plate."
                type="text"
                placeholder="Ex.: ABC-123"
                />
            <h2>*Here you can check all of yours vehicles</h2>
            <h3>Plate: plate</h3>
            <h4>VIN:</h4>
            <span>vin</span>
            <h4>Brand:</h4>
            <span>brand</span>
            <h4>Model:</h4>
            <span>model</span>
            <h4>Year:</h4>
            <span>year</span>
        </Container>
    )
}