import { useState } from "react";
import { ConfirmButton } from "../confirmButton";
import { Container, AddedWork } from "./styles";

type AddedWork = {
    work: string;
}

export function AddWork() {
    const [work, setWork] = useState<string | null>(null);
    const [addedWork, setAddedWork] = useState<AddedWork[]>([]);

    const handleAddWork = () => {
        if(work) {
            const newWork = {
                work: work
            };
            setAddedWork((prevState) => [...prevState, newWork])
        }
        alert("Work added successfully");
    };

    return (
        <Container> 
                <h1>Create a work</h1>
                    <label htmlFor="work">Work</label>
                    <input 
                        type="text"
                        placeholder="Ex.: Interior cleaning"
                        onChange={(e) => setWork(e.target.value)} 
                    />
                    <ConfirmButton onClick={ handleAddWork } title={"Confirm"} />
                    {
                        addedWork.map((addedWork, index) => {
                            return (
                                <AddedWork key={index}> 
                                    <span>{addedWork.work}</span>
                                </AddedWork>
                            )
                        })
                    }
        </Container>
    )
}