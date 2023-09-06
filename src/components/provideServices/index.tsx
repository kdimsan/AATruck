import { useState } from "react";
import { Container , Form, ConfirmedServices, Service} from "./styles";

import { ShowProvidedServices } from "../showProvidedServices";
import { VehicleForm } from "../vehicleForm";

type WorkDone = {
    work: string;
    price: number;
}

export function ProvidedServices() {
    
    const [work, setWork] = useState<string | null>(null);
    const [price, setPrice] = useState(0);
    const [confirmedServices, setConfirmedServices] = useState<WorkDone[]>([]);

    /**
     * * As opções de serviço serão criadas pelo usuário.
     * * O button do Form final fará apenas o POST para o banco de dados.
     */

    const handleConfirmedServices = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(work && price){
            const newWorkDone: WorkDone = {
                work: work,
                price: price
            };
        setConfirmedServices((prevState) => [...prevState, newWorkDone]);
        }
    };

    const handleRemoveService = (deleted: object) => {
        setConfirmedServices((prevState) => prevState.filter((service) => service !== deleted));
    };

    return (
        <Container>
            <h1>Services</h1>
            <VehicleForm />
            <Form>
                <label htmlFor='work'>Select an option</label>
                <select onChange={(e) => setWork(e.target.value)} id='work'> 
                    <option value=''></option>
                    <option value='External wash'>External wash</option>
                    <option value='Wax'>Wax</option>
                    <option value='Interior cleanising'>Interior cleanising</option>
                </select>

                <label htmlFor='price'>Price</label>
                <input 
                    onChange={(e) => setPrice(+e.target.value)} 
                    id='price' 
                    type="number" 
                    placeholder='$ XX,XX'
                />
                <button onClick={(e) => handleConfirmedServices(e) }>Confirm</button>
            </Form>
            <ConfirmedServices>
                <Service>
                    {
                        confirmedServices.map((service, index) => {
                            return (
                                <ShowProvidedServices 
                                    key={ String(index) }
                                    value={ service } 
                                    onClick={( deleted ) => handleRemoveService(deleted) }
                                />
                            )
                        })
                    }
                </Service>
            </ConfirmedServices>
        </Container>
    )
}