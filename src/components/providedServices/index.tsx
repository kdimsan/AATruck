import { useState } from "react";
import { Container , Form, ConfirmedServices, Service} from "./styles";
import { ShowServices } from "../showServices";

type WorkDone = {
    work: string;
    price: number;
}

export function ProvidedServices() {
    const [vin, setVin] = useState('');
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
            <Form>
                    <label htmlFor='vin'>Type the VIN</label>
                    <input onChange={(e) => setVin(e.target.value)} id='vin' placeholder='XXXX-XXXX-XXXX-XXXX'/>
                </Form>
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
                    {vin !== "" && <h3>vin</h3>}
                    <h2>{ vin }</h2>
                    <Service>
                        {
                            confirmedServices.map((service, index) => {
                                return (
                                    <ShowServices 
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