import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { update, create, setResponse } from "../../app/features/book";

import { Button as ComponentButton } from "../../components/Button";

import ReturnIcon from "../../icons/return.svg";


import {
  Wrapper,
  Container,
  RightBox,
  LeftBox,
  Image,
  Strong,
  BottomBox,
  IconButton
} from "./styles";
import { Input } from "../../components/Input";

export function BookForm() {
  const { id } = useAppSelector((state) => state.user.value.user);
  const { book, response } = useAppSelector((state) => state.book.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const [imageUrl, setImageUrl] = useState<Book["image_url"]>("");
  const [title, setTitle] = useState<Book["title"]>("");
  const [description, setDescription] = useState<Book["description"]>("");
  const [releaseDate, setReleaseDate] = useState<string>("");

  const [isMissingFields, setIsMissingFields] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setResponse({}))
  }, []);


  useEffect(() => {
    if (book) {
      setImageUrl(book.image_url);
      setTitle(book.title);
      setDescription(book.description);
      setReleaseDate(book.release_date.toString().split("T")[0]);

    }
  }, [book]);

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

  const handleSubmitForm = useCallback(() => {
    if (valdiateFields()) {
      if (book) {
        setIsMissingFields(false);
        dispatch(update({
          id: book.id,
          image_url: imageUrl,
          description,
          release_date: new Date(formatDate(releaseDate!)),
          title,
          is_rented: false,
          user_id: book.user_id
        }))
      } else {
        setIsMissingFields(false);
        dispatch(create({
          image_url: imageUrl,
          description,
          release_date: new Date(formatDate(releaseDate!)),
          title,
          is_rented: false,
        }))
      }
    } else {
      setIsMissingFields(true);
    }
  }, [valdiateFields]);

  return (
    <Wrapper >
      <Container>
        <LeftBox>
          {imageUrl ? <Image src={imageUrl} /> : <Strong>Book image</Strong>}
        </LeftBox>
        <RightBox>
          <IconButton title="Return" onClick={() => navigate(-1)}><img src={ReturnIcon} height={50} /></IconButton>
          <Input required placeholder="Image url..." onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
          <Input required placeholder="Write the title here..." onChange={(e) => setTitle(e.target.value)} value={title} />
          <Input required placeholder="Write the description here..." onChange={(e) => setDescription(e.target.value)} value={description} />
          <Input
            required
            type="date"
            placeholder="Write the release date here..."
            onChange={(e) => setReleaseDate(e.target.value)}
            value={releaseDate}
          />
          <BottomBox>
            <ComponentButton onClick={handleSubmitForm}>{book ? "Edit" : "Create"}</ComponentButton>
            {isMissingFields ? <Strong>Missing fields...</Strong> : null}
            {response?.status ? <Strong>{response?.message}</Strong> : null}
          </BottomBox>
        </RightBox>
      </Container>
    </Wrapper>);
}