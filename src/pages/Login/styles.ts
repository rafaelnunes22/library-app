import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  height: 70%;
  padding: 48px;

  border-top-left-radius:  20px;
  border-top-right-radius:  20px;

  width: 100%;

  background-color: black;

  @media(min-width: 1024px) {
    max-width: 500px;
  }
`;

export const Title = styled.h1`
  color: white;
  padding: none;
  margin: 0;
`;

export const Message = styled.h4`
  color: white;
  padding: none;
  margin: 0;
`;

