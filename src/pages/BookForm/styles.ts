import styled from "styled-components";

import { Input as ComponentInput } from "../../components/Input";
import { Button as ComponentButton } from "../../components/Button";

import { Card as CardComponent } from "../../components/Card";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: inherit;
  align-items: center;
  
  @media(min-width: 1024px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 800px;
  width: 100%;
  margin-top: 100px;
  

  @media(min-width: 1024px) {
  flex-direction: row;
  margin-top: 0;

  }
`;

export const RightBox = styled.div`
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 400px;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  gap: 20px;
  
  @media(min-width: 1024px) {
    position: relative;
  }

`;

export const LeftBox = styled.div`
  height: 400px;
  width: 500px;
  border: 2px solid white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
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
  color: white;
`;

export const IConButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

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
    height: 50px;
    width: 50px;
    top: 0;
    right: 0;
    height: 0;
    border: none;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  gap: 10px;
`;








