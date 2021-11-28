import styled from "styled-components";

import { Input as ComponentInput } from "../../components/Input";
import { Button as ComponentButton } from "../../components/Button";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  height: 0;
  padding-top: 48px;
  padding-bottom: 150px;
  width: 100%;

  @media(min-width: 1024px) {
  padding-bottom: 64px;
  flex-direction: row;
  justify-content: center;
  }
`;

export const Input = styled(ComponentInput)`
  color: white;
  padding: none;
  margin: 0;
`;

export const Button = styled(ComponentButton)`
  width: 100%;

  @media(min-width: 1024px) {
    width: 30%;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  margin-top: 150px;
  
  @media(min-width: 1024px) {
    margin:0;
  }
  `;

export const Title = styled.h1`
  color: white;
  padding: none;
  margin: 0;
`;

