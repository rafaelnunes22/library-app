import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAll } from "../../app/features/book";


import { Card } from "../../components/Card";

import {
  Wrapper,
  SearchContainer,
  Input,
  Button,
  BookContainer,
} from "./styles";

export function Search() {

  const { books } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();

  const [bookList, setBookList] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  useEffect(() => {
    setBookList(books);
  }, [books])

  return (
    <Wrapper>
      <SearchContainer>
        <Input placeholder="Search by title" onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={() => dispatch(getAll())}>Search</Button>
      </SearchContainer>
      <BookContainer>
        {bookList.filter((filteredBook) => {
          if (searchTerm == "") {
            return filteredBook;
          } else if (filteredBook.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return filteredBook;
          }
        }).map((book: Book, index: number) => {
          return <Card key={index} title={book.title} image_url={book.image_url} />
        })}
      </BookContainer>
    </Wrapper>);
}