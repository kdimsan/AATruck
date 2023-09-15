import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/input";
import { ConfirmButton } from "../../components/confirmButton";

export function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    
    const verifyEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);


    const handleCreateAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!verifyEmail(email)) {
            setError("Invalid email");
        }
    };

    const handleBackPage = () => {
        navigate(-1)
    };

    return (
        <Container>
            <main>
                <h1>Sign up</h1>
                <Form>
                    <Input
                        labelText="Name"
                        htmlFor="name"
                        id="name"
                        placeholder="Jhon"
                        type="text"
                    />
                    <Input
                        labelText="Last name"
                        htmlFor="lastName"
                        id="lastName"
                        placeholder="Vard"
                        type="text"
                    />
                    <Input
                        labelText="Email"
                        htmlFor="email"
                        id="email"
                        placeholder="example@example.com"
                        type="email"
                        onChange={ handleEmail }
                    />
                    {error && <div className="error-style">{error}</div>}
                    <Input
                        labelText="Password"
                        htmlFor="password"
                        id="password"
                        placeholder="*****"
                        type="password" 
                    />
                    <ConfirmButton title={"Create account"} onClick={ handleCreateAccount }/>
                </Form>
                <button onClick={ handleBackPage }>Already have account</button>
            </main>
        </Container>
    )
}