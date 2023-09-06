import { useState } from "react";
import { Container } from "./styles";
import { IoCloseOutline } from 'react-icons/io5';

type ServiceType = {
    work: string;
    price: number;
}

interface ShowServicesProps {
    value: ServiceType;
    onClick: (value: ServiceType) => void;
}

export function ShowProvidedServices( { value, onClick }: ShowServicesProps ) {

    const [fadingOut, setFadingOut] = useState(false);

    const handleRemoverClick = () => {
        setFadingOut(true);
        setTimeout(() => {
            onClick(value);
        }, 300);
    };
    
    return (
        <Container>
            <li 
                className={ fadingOut ? "fadeout" : "" }
                onAnimationEnd={ () => setFadingOut(false) }
            >
                <h4>{value.work}</h4>
                <span>U$ {value.price.toFixed(2)}</span>
                <button onClick={ handleRemoverClick }><IoCloseOutline /></button>
            </li>
        </Container>
    )
}