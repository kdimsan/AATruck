import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

export function SignIn() {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate("/create-account")
    }

    return (
        <Container>
            <main>
                <h1>Sign in</h1>
                <Form>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        placeholder="example@example.com"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                    <button>Confirm</button>
                </Form>
                <button onClick={ handleCreateAccount }>Create account</button>
            </main>
        </Container>
    )
}