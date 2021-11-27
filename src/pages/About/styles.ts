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
  flex-direction: column;

  align-items: center;
  height: 800px;
  width: 100%;

  @media(min-width: 1024px) {
  flex-direction: row;
  }
`;

export const RightBox = styled.div`
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 400px;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;

  @media(min-width: 1024px) {
    position: relative;
  }

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

export const IConButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 50px;
  width: 50px;

  background: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    opacity: 0.8;
  }

  &:active {
    background-color: transparent;
    opacity: 0.6;
  }

  @media(min-width: 1024px) {
    top: 0;
    right: 0;
    height: 0;
    border: none;
  }


`;





