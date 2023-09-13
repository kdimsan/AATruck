import { Container, VehicleInformation, Form } from "./styles";

export function VehicleForm() {
    
    return (
        <Container>
            <Form>
                 
            </Form>
            <VehicleInformation>
                <h2>Vehicle informations</h2>
                <div>
                    <h3>VIN: vin</h3>
                    <h3>Plate: plate</h3>
                    <h3>Brand: brand</h3>
                    <h3>Model: model</h3>
                    <h3>Year: year</h3>
                </div>
            </VehicleInformation>
        </Container>
    )
}