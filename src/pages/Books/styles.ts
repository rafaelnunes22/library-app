import styled from "styled-components";

import { Input as ComponentInput } from "../../components/Input";
import { Button as ComponentButton } from "../../components/Button";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 24px;
  height: 0;
  padding-top: 48px;
  padding-bottom: 64px;


  width: 100%;

`;

export const Input = styled(ComponentInput)`
  color: white;
  padding: none;
  margin: 0;

`;

export const Button = styled(ComponentButton)`
width: 30%;
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  background-color: green;
`;



export const Title = styled.h1`
  color: white;
  padding: none;
  margin: 0;
`;

