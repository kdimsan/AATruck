import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ButtonsOrganizer } from "./styles";

import { Input } from "../input";
import { ConfirmButton } from "../confirmButton";
//import { RegistredVehicleConfig } from "../registredVehicleConfig";

export interface ConfirmVehicle {
  vin: string;
  plate: string;
  brand: string;
  model: string;
  year: string;
}

export function VehicleRegistration() {
  const [vin, setVin] = useState("");
  const [plate, setPlate] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const [confirmVehicle, setConfirmVehicle] = useState<ConfirmVehicle[]>([]);
  const [confirmButton, setConfirmButton] = useState(false);
  const [buttonsOrganizer, setButtonsOrganizer] = useState("none");

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

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
  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value);
  };

  const handleAddVehicle = () => {
    setButtonsOrganizer("none");
    setConfirmButton(false);
    setBrand("");
    setModel("");
    setVin("");
    setPlate("");
    setYear("");
    setColor("");
  };

  const handleNavigateToWork = () => {
    navigate("/select-services");
  };

  const handleConfirmVehicle = () => {
    if (vin && plate && brand && model && year) {
      const vehicleConfirmation = {
        vin: vin,
        brand: brand,
        year: year,
        model: model,
        plate: plate,
        color: color,
      };
      setConfirmVehicle((prevState) => [...prevState, vehicleConfirmation]);
      setConfirmButton(true);
      setButtonsOrganizer("flex");
      alert("Vehicle registred successfully");
    }
  };
  console.log(confirmVehicle);

  return (
    <Container>
      <h1>Register Vehicle</h1>
      <form>
        <Input
          labelText="Type the VIN number"
          htmlFor="vin"
          id="vin"
          type="text"
          placeholder="XXXX-XXXX-XXXX"
          value={vin}
          onChange={handleVinInput}
        />
        <Input
          labelText="Vehicle plate"
          htmlFor="plate"
          id="plate"
          type="text"
          placeholder="ABC-123"
          value={plate}
          onChange={handlePlateInput}
        />
        <Input
          labelText="Brand"
          htmlFor="brand"
          id="brand"
          type="text"
          placeholder="Ford"
          value={brand}
          onChange={handleBrandInput}
        />
        <Input
          labelText="Model"
          htmlFor="model"
          id="model"
          type="text"
          placeholder="Maverick"
          value={model}
          onChange={handleModelInput}
        />
        <Input
          labelText="Year of production"
          htmlFor="year"
          id="year"
          type="number"
          placeholder="1980"
          value={year}
          onChange={handleYearInput}
        />
        <Input
          labelText="Vehicle color"
          htmlFor="color"
          id="color"
          type="text"
          placeholder="Ex.: Red"
          value={color}
          onChange={handleColorInput}
        />
      </form>
      <ConfirmButton
        hidden={confirmButton}
        onClick={handleConfirmVehicle}
        title="Confirm vehicle"
      />

      <ButtonsOrganizer style={{ display: buttonsOrganizer }}>
        <button onClick={handleNavigateHome}>Home</button>
        <button onClick={handleAddVehicle}>Add another vehicle</button>
        <button onClick={handleNavigateToWork}>Select work</button>
      </ButtonsOrganizer>

      {/* <div className="vehicle-registred">
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
            </div> */}
    </Container>
  );
}
