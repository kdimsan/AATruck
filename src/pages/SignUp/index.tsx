import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

export function SignUp() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <Container>
            <main>
                <h1>Sign up</h1>
                <Form>
                <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        placeholder="Jhon Smith"
                        id="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        placeholder="example@example.com"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                    <button>Create account</button>
                </Form>
                <button onClick={ handleGoBack }>Already have account</button>
            </main>
        </Container>
    )
}