import React from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Title
} from "./styles";

export function Login() {
  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button onClick={() => console.log("clicked")}>Login</Button>
      </Container>
    </Wrapper>

  )
}