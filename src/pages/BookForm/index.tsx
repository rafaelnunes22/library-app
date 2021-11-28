import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { remove, rent, create } from "../../app/features/book";

import { Button as ComponentButton } from "../../components/Button";

import ReturnIcon from "../../icons/return.svg";


import {
  Wrapper,
  Container,
  RightBox,
  LeftBox,
  Image,
  Title,
  Description,
  Strong,
  BottomBox,
  IConButton
} from "./styles";
import { Input } from "../../components/Input";

export function BookForm() {
  const { id } = useAppSelector((state) => state.user.value.user);
  const { book, response } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentBook, setCurrentBook] = useState<Book>();

  const [imageUrl, setImageUrl] = useState<Book["image_url"]>("");
  const [title, setTitle] = useState<Book["title"]>("");
  const [description, setDescription] = useState<Book["description"]>("");
  const [releaseDate, setReleaseDate] = useState<string>();

  const [isMissingFields, setIsMissingFields] = useState<boolean>(false);

  useEffect(() => {
    setCurrentBook(book);
  }, [book])

  const formatDate = useCallback((date: string) => {
    const splitedDate: string[] = date.split("-");
    return `${splitedDate[1]}-${splitedDate[2]}-${splitedDate[0]}`
  }, []);

  const valdiateFields = useCallback(() => {
    return imageUrl &&
      title &&
      description &&
      releaseDate
  }, [
    imageUrl,
    title,
    description,
    releaseDate
  ]);

  return (
    <Wrapper >
      <Container>
        <LeftBox>
          {imageUrl ? <Image src={imageUrl} /> : <Strong>Book image</Strong>}
        </LeftBox>
        <RightBox>
          <Input required placeholder="Image url..." onChange={(e) => setImageUrl(e.target.value)} />
          <Input required placeholder="Write the title here..." onChange={(e) => setTitle(e.target.value)} />
          <Input required placeholder="Write the description here..." onChange={(e) => setDescription(e.target.value)} />
          <Input
            required
            type="date"
            placeholder="Write the release date here..."
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <BottomBox>
            <ComponentButton onClick={() => {
              if (valdiateFields()) {
                setIsMissingFields(false);
                dispatch(create({
                  image_url: imageUrl,
                  description,
                  release_date: new Date(formatDate(releaseDate!)),
                  title,
                  is_rented: false,
                }))
              } else {
                setIsMissingFields(true);
              }
            }}>Create</ComponentButton>
            {isMissingFields ? <Strong>Missing fields...</Strong> : null}
            {response?.status == 200 ? <Strong>Creation success</Strong> : null}
          </BottomBox>
        </RightBox>
      </Container>
    </Wrapper>);
}