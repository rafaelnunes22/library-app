import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { remove, update, setResponse } from "../../app/features/book";

import { Button as ComponentButton } from "../../components/Button";

import ReturnIcon from "../../icons/return.svg";
import EditIcon from "../../icons/dots.svg";

import {
  Wrapper,
  Container,
  RightBox,
  LeftBox,
  Image,
  Title,
  Description,
  Strong,
  ReturnIconButton,
  EditIconButton
} from "./styles";

export function About() {
  const { id } = useAppSelector((state) => state.user.value.user);
  const { book } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentBook, setCurrentBook] = useState<Book>();

  useEffect(() => {
    dispatch(setResponse({}));
    setCurrentBook(book);
  }, [book])

  const formatDate = useCallback((date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR");
  }, [currentBook?.release_date]);

  return (
    <Wrapper >
      <Container>
        <LeftBox>
          <Image src={currentBook?.image_url} alt={currentBook?.title} />
          <ComponentButton onClick={() => {
            currentBook?.id && dispatch(remove(currentBook.id))
            navigate(-1)
          }} disabled={currentBook?.is_rented}>
            {currentBook?.is_rented ? "Cannot be removed" : "Remove book"}
          </ComponentButton>
        </LeftBox>
        <RightBox>
          <ReturnIconButton title="Return" onClick={() => navigate(-1)}><img src={ReturnIcon} height={50} /></ReturnIconButton>
          <EditIconButton title="Edit" onClick={() => navigate("/book-form")}><img src={EditIcon} height={50} /></EditIconButton>
          <Title>{currentBook?.title}</Title>
          <Description>{currentBook?.description}</Description>
          <Strong>Release date: </Strong>
          <Description>{currentBook && formatDate(currentBook?.release_date)}</Description>
          <ComponentButton
            onClick={() => dispatch(update({
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