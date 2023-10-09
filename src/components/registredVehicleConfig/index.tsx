import { ConfirmVehicle } from "../vehicleRegistration";
import { Container } from "./styles";

interface RegistredVehicleConfigProps {
  value: ConfirmVehicle;
}

export function RegistredVehicleConfig({ value }: RegistredVehicleConfigProps) {
  return (
    <Container>
      <h3>Plate: {value.plate}</h3>
      <h4>VIN:</h4>
      <span>{value.vin}</span>
      <h4>Brand:</h4>
      <span>{value.brand}</span>
      <h4>Model:</h4>
      <span>{value.model}</span>
      <h4>Year:</h4>
      <span>{value.year}</span>
    </Container>
  );
}
