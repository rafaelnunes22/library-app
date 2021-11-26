import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 48px;

  border: 2px solid white;
  border-radius:  20px;
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

