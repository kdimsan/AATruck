import { useState } from "react";
import { Container, Content } from "./styles";
import { ShowServicesProps } from "../showProvidedServices";
import { IoCloseOutline } from 'react-icons/io5';

export function ShowAddedWork({ value, onClick }: ShowServicesProps) {

    const [fadingOut, setFadingOut] = useState(false);

    const handleRemoverClick = () => {
        setFadingOut(true);
        setTimeout(() => {
            onClick(value);
        }, 300);
    };

    return (
        <Container>
            <Content  className={ fadingOut ? "fadeout" : "" }
            onAnimationEnd={ () => setFadingOut(false) }>
                <h4>{value.work}</h4>
                <span>U$ {value.price.toFixed(2)}</span>
                <button onClick={ handleRemoverClick }><IoCloseOutline /></button>
            </Content>
        </Container>
    )
}