import { useState } from "react";
import { Container, Content, Form, ConfirmedServices, Service } from "./styles";

import { ShowProvidedServices } from "../showProvidedServices";
import { VehicleForm } from "../vehicleForm";
import { Select } from "../select";
import { Input } from "../input";
import { ConfirmButton } from "../confirmButton";

type WorkDone = {
  work: string;
  price: number;
};

export function ProvidedServices() {
  const [work, setWork] = useState<string | null>(null);
  const [price, setPrice] = useState(0);
  const [confirmedServices, setConfirmedServices] = useState<WorkDone[]>([]);

  const handleConfirmedServices = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (work && price) {
      const newWorkDone: WorkDone = {
        work: work,
        price: price,
      };
      setConfirmedServices((prevState) => [...prevState, newWorkDone]);
      setPrice(0);
      setWork("");
    }
  };

  const handleRemoveService = (deleted: object) => {
    setConfirmedServices((prevState) =>
      prevState.filter((service) => service !== deleted)
    );
  };

  const handleSelectWork = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWork(e.target.value);
  };

  const handleInputPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  return (
    <Container>
      <Content>
        <h1>Services</h1>
        <VehicleForm />
        <Form>
          <Select
            htmlFor="work"
            id="work"
            labelText="Select Work:"
            onChange={handleSelectWork}
          />

          <Input
            htmlFor="price"
            id="price"
            labelText="Price:"
            type="number"
            placeholder="$XX,XX"
            value={price.toString()}
            onChange={handleInputPrice}
          />
          <ConfirmButton onClick={handleConfirmedServices} title="Confirm" />
        </Form>
      </Content>
      <ConfirmedServices>
        <p>Select here all services you have done</p>
        <Service>
          {confirmedServices.map((service, index) => {
            return (
              <ShowProvidedServices
                key={String(index)}
                value={service}
                onClick={(deleted) => handleRemoveService(deleted)}
              />
            );
          })}
        </Service>
      </ConfirmedServices>
    </Container>
  );
}
