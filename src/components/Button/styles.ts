import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  border: none;
  border: 1.5px solid white;
  border-radius: 18px;
  
  width: 100%;
  font-size: 20px;
  
  padding-top: 18px;
  padding-bottom: 18px;
  
  &:hover:not(:disabled) {
    border-color: white;

    background-color: white;
    color: black;

    transition: 200ms;
  }

  &:active {
    border-color: white;

    background-color: white;
    color: black;

    transition: 200ms;
    opacity: 0.8;
  }

  &:disabled {
    background: red;
    border: none;
  }
`;

