import styled from "styled-components";

import { Input as ComponentInput } from "../../components/Input";
import { Button as ComponentButton } from "../../components/Button";

import { Card as CardComponent } from "../../components/Card";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 800px;
  width: 100%;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 800px;
  width: 400px;
  padding-right: 20px;
  padding-left: 20px;

`;

export const Image = styled.img`
  height: 400px;
  width: 300px;
`;

export const Title = styled.h3`
  color:white;
  margin: 0;
  margin-top: 10px;
`;

export const Description = styled.p`
  margin-top: 0;
  color:white;
`;

export const Strong = styled.strong`
  color:white;
`;





