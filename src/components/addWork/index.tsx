import { useState } from "react";
import { ConfirmButton } from "../confirmButton";
import { Container, AddedWork } from "./styles";
import { ShowAddedWork } from "../showAddedWork";

type AddedWork = {
    work: string;
    price: number;
}

export function AddWork() {
    const [work, setWork] = useState("");
    const [price, setPrice] = useState<number>();
    const [addedWork, setAddedWork] = useState<AddedWork[]>([]);
    
    const handleAddWork = () => {
        if(work && price) {
            const newWork = {
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

    return (
        <Container> 
                <h1>Create a work</h1>
                
                    <label htmlFor="work">Work</label>
                    <input
                        id="work"
                        type="text"
                        placeholder="Ex.: Interior cleaning"
                        onChange={(e) => setWork(e.target.value)} 
                        value={work}
                    />
                    <label htmlFor="price">Price</label>
                    <input 
                        id="price"
                        type="number"
                        placeholder="Ex.: Interior cleaning"
                        onChange={(e) => setPrice(+e.target.value)} 
                        value={price}
                    />
                    <ConfirmButton onClick={ handleAddWork } title={"Confirm"} />
                    <p>All of the works registred in your account can be seen here</p>
                    <AddedWork>
                        {
                            addedWork.map((addedWork, index) => {
                                return (
                                    <ShowAddedWork
                                    key={index}
                                    value={addedWork}
                                    onClick={deleted => handleRemoveWork(deleted)}
                                    />
                                )
                            })
                        }
                    </AddedWork>
        </Container>
    )
}