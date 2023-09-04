import { useState } from "react";
import { Container, VehicleInformation, Form } from "./styles";

export function VehicleForm() {
    const [vin, setVin] = useState('');
    const [plate, setPlate] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    return (
        <Container>
            <Form>
                <div className="vin_input">
                    <label htmlFor='vin'>Type the VIN</label>
                    <input 
                        type="text"
                        onChange={ (e) => setVin(e.target.value) } 
                        id='vin' 
                        placeholder='XXXX-XXXX-XXXX-XXXX'
                    />
                </div>
                <div className="plate_input">
                    <label htmlFor="plate">Vehicle plate</label>
                    <input
                        type="text"
                        onChange={ (e) => setPlate(e.target.value) } 
                        id='plate' 
                        placeholder='ABC-123'
                    />
                </div>
                <div className="brand_input">
                    <label htmlFor="brand">Vehicle brand</label>
                    <input
                        type="text"
                        onChange={(e) => setBrand(e.target.value)} 
                        id='brand' 
                        placeholder='Ford'
                    />
                </div>
                <div className="model_input">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        onChange={(e) => setModel(e.target.value)} 
                        id='model' 
                        placeholder='Maverick'
                    />
                </div>
                <div className="year_input">
                    <label htmlFor="year">Year of production</label>
                    <input
                        type="number"
                        onChange={(e) => setYear(e.target.value)} 
                        id='year' 
                        placeholder='1980'
                    />
                </div>

            </Form>
            <VehicleInformation>
                <h2>Vehicle informations</h2>
                <div>
                    <h3>VIN: {vin}</h3>
                    <h3>Plate: {plate}</h3>
                    <h3>Brand: {brand}</h3>
                    <h3>Model: {model}</h3>
                    <h3>Year: {year}</h3>
                </div>
            </VehicleInformation>
        </Container>
    )
}