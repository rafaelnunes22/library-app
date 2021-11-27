import { HTMLAttributes, ReactElement } from "react";
import { Wrapper, ButtonContainer, BookImage, Title } from "./styles";

type Props = {
  children?: ReactElement | ReactElement[];
  title: string;
  image_url: string;
} & HTMLAttributes<HTMLButtonElement>;

function Card({ children, title, image_url, ...props }: Props) {
  return (
    <Wrapper>
      <ButtonContainer {...props}>
        <BookImage src={image_url} alt={title} />
      </ButtonContainer>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export { Card };