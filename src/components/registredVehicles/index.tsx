import { Container, Content, FounderHolder } from "./styles";
import { Input } from "../input";

export function RegistredVehicles() {
  //get na api
  return (
    <Container>
      <FounderHolder>
        <h1>Registred vehicles</h1>
        <h2>*Here you can check all of yours vehicles</h2>
        <Input
          htmlFor="search"
          id="search"
          labelText="Search for a vehicle by plate."
          type="text"
          placeholder="Ex.: ABC-123"
        />
      </FounderHolder>
      <Content>
        <div>
          <h3>Plate: plate</h3>
          <h4>
            VIN: <span>XXXXXXXXXXXXXXXXX</span>
          </h4>
          <h4>
            Brand: <span>brand</span>
          </h4>
          <h4>
            Model: <span>model</span>
          </h4>
          <h4>
            Year: <span>year</span>
          </h4>
        </div>
        <div>
          <h3>Plate: plate</h3>
          <h4>
            VIN: <span>vin</span>
          </h4>
          <h4>
            Brand: <span>brand</span>
          </h4>
          <h4>
            Model: <span>model</span>
          </h4>
          <h4>
            Year: <span>year</span>
          </h4>
        </div>
        <div>
          <h3>Plate: plate</h3>
          <h4>
            VIN: <span>vin</span>
          </h4>
          <h4>
            Brand: <span>brand</span>
          </h4>
          <h4>
            Model: <span>model</span>
          </h4>
          <h4>
            Year: <span>year</span>
          </h4>
        </div>
      </Content>
    </Container>
  );
}
