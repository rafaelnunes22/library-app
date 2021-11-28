import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.button`
  height: 300px;
  width: 200px;

  border: none;
  border-radius: 10px;
  padding: 0;

  cursor: pointer;
  overflow: hidden;

  @media(min-width: 1024px) {
    height: 300px;
    width: 200px;
  }

  &:hover {
    filter: grayscale(1);
  }
  transition: 100ms;
`;

export const BookImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  color: white;
  margin: 0;
  text-align: center;
`;



