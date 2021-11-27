import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAll, rent } from "../../app/features/book";

import { Button as ComponentButton } from "../../components/Button";

import ReturnIcon from "../../icons/return.svg";


import {
  Wrapper,
  Container,
  RightBox,
  Image,
  Title,
  Description,
  Strong,
  IConButton
} from "./styles";

export function About() {
  const { id } = useAppSelector((state) => state.user.value.user);
  const { book } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentBook, setCurrentBook] = useState<Book>();

  useEffect(() => {
    setCurrentBook(book);
  }, [book])

  const formatDate = useCallback((date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR");
  }, [currentBook?.release_date]);


  return (
    <Wrapper >
      <Container>
        <Image src={currentBook?.image_url} />
        <RightBox>
          <IConButton onClick={() => navigate(-1)}><img src={ReturnIcon} height={50} /></IConButton>
          <Title>{currentBook?.title}</Title>
          <Description>{currentBook?.description}</Description>
          <Strong>Release date: </Strong>
          <Description>{currentBook && formatDate(currentBook?.release_date)}</Description>
          <ComponentButton
            onClick={() => dispatch(rent({
              ...currentBook!,
              is_rented: !currentBook?.is_rented,
              user_id: !currentBook?.is_rented ? undefined : id
            }))}
            disabled={currentBook?.is_rented}
          >{currentBook?.is_rented ? "Just rented" : "Rent now!"}</ComponentButton>
        </RightBox>
      </Container>
    </Wrapper>);
}