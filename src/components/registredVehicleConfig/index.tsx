import { ConfirmVehicle } from "../vehicleRegistration";
import { Container } from "./styles";

interface RegistredVehicleConfigProps {
    value: ConfirmVehicle;
}

export function RegistredVehicleConfig({value}: RegistredVehicleConfigProps) {
    return(
        <Container>
            <h3>Plate: {value.plate}</h3>
            <span>VIN: {value.vin}</span>
            <span>Brand: {value.brand}</span>
            <span>Model: {value.model}</span>
            <span>Year: {value.year}</span>
        </Container>
    )
}