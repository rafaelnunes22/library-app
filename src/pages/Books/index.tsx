import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAll, setBook } from "../../app/features/book";

import { Card } from "../../components/Card";


import {
  Wrapper,
  SearchContainer,
  Input,
  Button,
  BookContainer,
} from "./styles";

export function Books() {

  const { books } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [bookList, setBookList] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setBookList(books);
  }, [books]);

  const handleCardClick = useCallback((book: Book) => {
    dispatch(setBook(book));
    navigate("/about");
  }, [])

  return (
    <Wrapper >
      <SearchContainer>
        <Input placeholder="Search by title" onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={() => dispatch(getAll())}>Search</Button>
      </SearchContainer>
      <BookContainer style={{ overflow: "hidden" }}>
        {bookList.filter((filteredBook) => {
          if (searchTerm == "") {
            return filteredBook;
          } else if (filteredBook.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return filteredBook;
          }
        }).map((book: Book, index: number) => {
          return <Card key={index} title={book.title} image_url={book.image_url} onClick={() => handleCardClick(book)} />
        })}
      </BookContainer>
    </Wrapper>);
}