import { useState } from "react";

import { Container } from "./styles";


import { Input } from "../input";
import { ConfirmButton } from "../confirmButton";
import { RegistredVehicleConfig } from "../registredVehicleConfig";

export interface ConfirmVehicle {
    vin: string;
    plate: string;
    brand: string;
    model: string;
    year: string;
}

export function VehicleRegistration() {
    const [vin, setVin] = useState<string | null>();
    const [plate, setPlate] = useState<string | null>();
    const [brand, setBrand] = useState<string | null>();
    const [model, setModel] = useState<string | null>();
    const [year, setYear] = useState<string | null>();
    const [confirmVehicle, setConfirmVehicle] = useState<ConfirmVehicle[]>([]);

    const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };
    const handleModelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    };
    const handleBrandInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
    };
    const handlePlateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlate(e.target.value);
    };
    const handleVinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVin(e.target.value);
    };

    const handleConfirmVehicle = () => {
        if(vin && plate && brand && model && year) {
            const vehicleConfirmation = {
                vin: vin,
                brand: brand,
                year: year,
                model: model,
                plate: plate
            };
            setConfirmVehicle((prevState) => [...prevState, vehicleConfirmation]);
            setBrand("");
            setModel("");
            setVin("");
            setPlate("");
            setYear("");
        }
    };


    return(
        <Container>
            
            <h1>Register Vehicle</h1>
            <form>
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
            </form>
            <ConfirmButton onClick={ handleConfirmVehicle } title="Confirm vehicle" />
            <div className="vehicle-registred">
                {
                    confirmVehicle.map((vehicle, index) => {
                        return(
                            <RegistredVehicleConfig 
                            key={String(index)}
                            value={vehicle}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}