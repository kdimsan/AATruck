import React, { useState } from "react";
import { Container, VehicleInformation, Form } from "./styles";
import { Input } from "../input";

export function VehicleForm() {
    const [vin, setVin] = useState('');
    const [plate, setPlate] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    }
    const handleModelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    }
    const handleBrandInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
    }
    const handlePlateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlate(e.target.value);
    }
    const handleVinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVin(e.target.value);
    }

    return (
        <Container>
            <Form>
                 <Input 
                    labelText="Type the VIN number"
                    htmlFor="vin"
                    id="vin"
                    type="text"
                    placeholder="XXXX-XXXX-XXXX"
                    onChange={ handleVinInput }
                />
                <Input 
                    labelText="Vehicle plate"
                    htmlFor="plate"
                    id="plate"
                    type="text"
                    placeholder="ABC-123"
                    onChange={ handlePlateInput }
                />
                <Input 
                    labelText="Brand"
                    htmlFor="brand"
                    id="brand"
                    type="text"
                    placeholder="Ford"
                    onChange={ handleBrandInput }
                />
                <Input 
                    labelText="Model"
                    htmlFor="model"
                    id="model"
                    type="text"
                    placeholder="Maverick"
                    onChange={ handleModelInput }
                />
                <Input 
                    labelText="Year of production"
                    htmlFor="year"
                    id="year"
                    type="number"
                    placeholder="1980"
                    onChange={ handleYearInput }
                />
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