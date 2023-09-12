import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/input";

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
                    <Input
                        labelText="Name"
                        htmlFor="name"
                        id="name"
                        placeholder="Jhon Vard"
                        type="text"
                    />
                    <Input
                        labelText="Email"
                        htmlFor="email"
                        id="email"
                        placeholder="example@example.com"
                        type="email"
                    />
                    <Input
                        labelText="Password"
                        htmlFor="password"
                        id="password"
                        placeholder="*****"
                        type="password" 
                    />
                    <button>Create account</button>
                </Form>
                <button onClick={ handleGoBack }>Already have account</button>
            </main>
        </Container>
    )
}