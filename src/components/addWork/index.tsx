import { useState, ChangeEvent } from "react";

import { Container, AddedWork, Form } from "./styles";
import { ConfirmButton } from "../confirmButton";
import { ShowAddedWork } from "../showAddedWork";
import { Input } from "../input";

interface AddedWorkProps {
  work: string;
  price: number;
}

export function AddWork() {
  const [work, setWork] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [addedWork, setAddedWork] = useState<AddedWorkProps[]>([]);

  const handleAddWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (work && price) {
      const newWork: AddedWorkProps = {
        work: work,
        price: price,
      };
      setAddedWork((prevState) => [...prevState, newWork]);
      setWork("");
      setPrice(0);
    }
  };

  const handleRemoveWork = (deleted: object) => {
    setAddedWork((prevState) => prevState.filter((work) => work !== deleted));
  };

  const handleWorkInput = (e: ChangeEvent<HTMLInputElement>) => {
    setWork(e.target.value);
  };
  const handlePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  return (
    <Container>
      <Form>
        <h1>Create a work</h1>
        <Input
          htmlFor="work"
          labelText="Work"
          id="work"
          type="text"
          placeholder="Ex.: Interior Cleaning"
          onChange={handleWorkInput}
          value={work}
        />
        <Input
          htmlFor="price"
          labelText="Price"
          id="price"
          type="number"
          placeholder="0"
          onChange={handlePriceInput}
          value={price.toString()}
        />
        <ConfirmButton onClick={handleAddWork} title={"Confirm"} />
      </Form>
      <AddedWork>
        <p>All your registered works can be viewed here</p>
        <div>
          {addedWork.map((addedWork, index) => {
            return (
              <ShowAddedWork
                key={index}
                value={addedWork}
                onClick={(deleted) => handleRemoveWork(deleted)}
              />
            );
          })}
        </div>
      </AddedWork>
    </Container>
  );
}
