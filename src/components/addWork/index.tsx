import { useState, ChangeEvent } from "react";
import { ConfirmButton } from "../confirmButton";
import { Container, AddedWork } from "./styles";
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
    
    const handleAddWork = () => {
        if(work && price) {
            const newWork: AddedWorkProps = {
                work: work,
                price: price
            };
            setAddedWork((prevState) => [...prevState, newWork]);
            setWork("");
            setPrice(0);
        }
    };

    const handleRemoveWork = (deleted: object) => {
        setAddedWork((prevState) => prevState.filter(work => work !== deleted));
    };

    const handleWorkInput = (e: ChangeEvent<HTMLInputElement>) => {
        setWork(e.target.value);
    };
    const handlePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(+e.target.value)
    };

    return (
        <Container> 
                <h1>Create a work</h1>
                    <Input
                        htmlFor="work"
                        labelText="Work"
                        id="work"
                        type="text"
                        placeholder="Ex.: Interior Cleaning"
                        onChange={ handleWorkInput }
                        value= { work }
                    />
                    <Input 
                        htmlFor="price"
                        labelText="Work"
                        id="price"
                        type="number"
                        placeholder="0"
                        onChange={ handlePriceInput }
                        value={ price.toString() }
                    />
                    <ConfirmButton onClick={ handleAddWork } title={"Confirm"} />
                    <p>All of the works registred in your account can be seen here</p>
                    <AddedWork>
                        {
                            addedWork.map((addedWork, index) => {
                                return (
                                    <ShowAddedWork
                                        key={ index }
                                        value={ addedWork }
                                        onClick={ deleted => handleRemoveWork(deleted) }
                                    />
                                )
                            })
                        }
                    </AddedWork>
        </Container>
    )
}