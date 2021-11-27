import { ReactElement } from "react";
import { Wrapper, ButtonContainer, BookImage, Title } from "./styles";

type Props = {
  children?: ReactElement | ReactElement[];
};

function Card({ children }: Props) {
  return (
    <Wrapper>
      <ButtonContainer>
        <BookImage src="https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg" alt="title" />
      </ButtonContainer>
      <Title>Title</Title>
    </Wrapper>
  )
}

export { Card };