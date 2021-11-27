import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { login } from "../../app/features/user";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Title
} from "./styles";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const { user, token } = useAppSelector((state) => state.user.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/search")
    }
  }, [user])

  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <Button onClick={() => dispatch(login(username, password))}>Login</Button>
      </Container>
    </Wrapper>

  )
}