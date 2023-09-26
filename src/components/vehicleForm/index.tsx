import { Container, VehicleInformation, Content } from "./styles";

export function VehicleForm() {
    
    return (
        <Container>
            <VehicleInformation>
                <h2>Vehicle informations</h2>
                <Content>
                    <h3>VIN: <span>XXXXXXXXXXXXXXXXX</span></h3>
                    <h3>Plate: <span>AB 123 CD</span></h3>
                    <h3>Brand: <span>Ferrari</span></h3>
                    <h3>Model: <span>458</span></h3>
                    <h3>Year: <span>2014</span></h3>
                </Content>
            </VehicleInformation>
        </Container>
    )
}