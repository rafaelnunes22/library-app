import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";
import { AxiosResponse } from 'axios';

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: {
      books: <Book[]>[],
      book: <Book>{},
      response: {
        status: <number>0,
        message: <string>""
      }
    },
  },
  reducers: {
    setBooks: (state, action) => {
      state.value = action.payload;
    },
    setBook: (state, action) => {
      state.value.book = action.payload;
    },
    setResponse: (state, action) => {
      state.value.response = action.payload;
    },
  }
});

export const { setBooks, setBook, setResponse } = bookSlice.actions;

export default bookSlice.reducer;

export function getAll(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.get("getAll").then((response: AxiosResponse<BookResponse>) => {
      dispatch(setBooks(response.data.result));
      dispatch(setResponse(response.data.reqResponse));
    });
  }
}

export function update(book: Book): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.put("update", book).then((response: AxiosResponse<BookResponse>) => {
      if (response.data.reqResponse.status <= 201) {
        dispatch(setBook(response.data.result));
      }
      dispatch(setResponse(response.data.reqResponse));
    });
  }
}

export function remove(id: string): AppThunk {
  return async function () {
    await api.delete(`delete/${id}`).then((response: AxiosResponse<BookResponse>) => {
    });
  }
}

export function create(book: Book): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.post("create", book).then((response: AxiosResponse<BookResponse>) => {
      dispatch(setResponse(response.data.reqResponse));
    });
  }
}
