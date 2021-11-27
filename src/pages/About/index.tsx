import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAll, rent } from "../../app/features/book";

import { Button } from "../../components/Button";


import {
  Wrapper,
  Container,
  LeftBox,
  Image,
  Title,
  Description,
  Strong
} from "./styles";

export function About() {
  const { id } = useAppSelector((state) => state.user.value.user);
  const { book } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();

  // const [bookList, setBook] = useState<Book>({});
  const [currentBook, setCurrentBook] = useState<Book>();

  useEffect(() => {
    setCurrentBook(book);
  }, [book])

  const formatDate = useCallback((date: Date) => {
    return new Date().toLocaleDateString("pt-BR");
  }, [currentBook?.release_date]);


  return (
    <Wrapper >
      <Container>
        <LeftBox>
          <Image src={currentBook?.image_url} />
          <Title>{currentBook?.title}</Title>
          <Description>{currentBook?.description}</Description>
          <Strong>Release date: </Strong>
          <Description>{currentBook && formatDate(currentBook?.release_date)}</Description>
          <Button
            onClick={() => dispatch(rent({
              ...currentBook!,
              is_rented: !currentBook?.is_rented,
              user_id: !currentBook?.is_rented ? undefined : id
            }))}
          >{currentBook?.is_rented ? "Return the book" : "Rent now!"}</Button>
        </LeftBox>
      </Container>
    </Wrapper>);
}