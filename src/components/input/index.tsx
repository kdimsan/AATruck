import { ChangeEvent } from "react";
import { InputContent } from "./styles";

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    value?: string | number;
    htmlFor: string;
    labelText: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input( {id, type, placeholder, value, htmlFor, labelText, onChange}: InputProps ) { 
   return(
        <InputContent>
            <label htmlFor={ htmlFor }>{ labelText }</label>
            <input 
                type={ type }
                id={ id } 
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
            />
        </InputContent>
   )
}