import styled from "styled-components";

import { Input as ComponentInput } from "../../components/Input";
import { Button as ComponentButton } from "../../components/Button";


export const Wrapper = styled.div`
  display: flex;
  
  height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 24px;
  height: 0;
  padding: 48px;


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



export const Title = styled.h1`
  color: white;
  padding: none;
  margin: 0;
`;

