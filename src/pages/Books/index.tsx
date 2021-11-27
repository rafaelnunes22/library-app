import React from "react";



import {
  Wrapper,
  SearchContainer,
  Input,
  Button,
  Title
} from "./styles";

export function Search() {
  return (
    <Wrapper>
      <SearchContainer>
        <Input placeholder="Search by title" />
        <Button> Search  </Button>
      </SearchContainer>
    </Wrapper>);
}