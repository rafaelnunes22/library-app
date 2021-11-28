import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: inherit;
  align-items: center;
  
  @media(min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;

  padding: 20px;

  height: 100%;
  width: 100%;
  margin-top: 100px;

  background-color: black;

  @media(min-width: 1024px) {
  flex-direction: row;
  align-items: flex-start;
  
  margin-top: 0;
  height: 800px;


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

  @media(min-width: 1024px) {
    position: relative;
  }

`;

export const LeftBox = styled.div`
`;

export const Image = styled.img`
  height: 400px;
  width: 300px;
  margin-bottom: 10px;
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

export const ReturnIconButton = styled.button`
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

export const EditIconButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

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
    left: 0;
    height: 0;
    border: none;
  }
`;





