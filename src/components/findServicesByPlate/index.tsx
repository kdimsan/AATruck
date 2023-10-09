import { Container } from "./styles";
import { ServicesHistory } from "../servicesHistory";

export function FindServicesByPlate() {
  //Get the plate by the previous page

  return (
    <Container>
      <h1>
        Plate: <span>ABC-123</span>
      </h1>
      <h3>Services done</h3>
      <ServicesHistory />
    </Container>
  );
}
