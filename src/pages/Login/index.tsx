import React from "react";
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

  const user = useAppSelector((state) => state.user.value);

  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button onClick={() => dispatch(login({
          id: 0,
          username: "falatu",
          name: "cabron",
        }))}>Login</Button>
      </Container>
    </Wrapper>

  )
}