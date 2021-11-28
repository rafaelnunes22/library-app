import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { login } from "../../app/features/user";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Title,
  Message
} from "./styles";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, token, response } = useAppSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      navigate("/books")
    }
  }, [user])

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <Button onClick={() => dispatch(login(username, password))}>Login</Button>
        {response?.status === 401 ? <Message>{response.message}</Message> : null}
      </Container>
    </Wrapper>

  )
}