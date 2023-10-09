import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Form } from "./styles";
import { Input } from "../../components/input";
import { ConfirmButton } from "../../components/confirmButton";
import { WindowSize } from "../../components/windowSize";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const verifyEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!verifyEmail(email)) {
      setError("Invalid email");
    } else {
      alert("Valid email");
    }
  };
  //Do the same logic with the password if incorrect

  return (
    <Container>
      <main>
        <WindowSize className="logo" widthWanted={1024}>
          <div>
            <h1>Program name</h1>
          </div>
        </WindowSize>
        <Content>
          <h1>Sign in</h1>
          <Form>
            <Input
              labelText="Email"
              htmlFor="email"
              id="email"
              type="email"
              placeholder="Ex.: email@example.com"
              onChange={handleEmail}
            />
            {error && <div className="error-style">{error}</div>}
            <Input
              labelText="Password"
              htmlFor="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <ConfirmButton title={"Confirm"} onClick={handleAccount} />
          </Form>
          <button onClick={handleCreateAccount}>Create account</button>
        </Content>
      </main>
    </Container>
  );
}
