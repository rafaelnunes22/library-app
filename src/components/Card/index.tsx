import { title } from "process";
import { ReactElement } from "react";
import { Wrapper, ButtonContainer, BookImage, Title } from "./styles";

type Props = {
  children?: ReactElement | ReactElement[];
  title: string;
  image_url: string;
};

function Card({ children, title, image_url }: Props) {
  return (
    <Wrapper>
      <ButtonContainer>
        <BookImage src={image_url} alt={title} />
      </ButtonContainer>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export { Card };