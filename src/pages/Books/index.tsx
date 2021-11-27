import React from "react";
import { Card } from "../../components/Card";



import {
  Wrapper,
  SearchContainer,
  Input,
  Button,
  BookContainer,
  Title
} from "./styles";

export function Search() {
  return (
    <Wrapper>
      <SearchContainer>
        <Input placeholder="Search by title" />
        <Button> Search  </Button>
      </SearchContainer>

      <BookContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>


      </BookContainer>
    </Wrapper>);
}