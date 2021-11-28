import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    await api.get("getAll").then((response: any) => {
      dispatch(setBooks(response.data));
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function rent(book: Book): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.put("update", book).then((response: any) => {
      dispatch(setBook(response.data));
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function remove(id: string): AppThunk {
  return async function () {
    await api.delete(`delete/${id}`).then((response: any) => {
    }).catch((err) => {
      console.log(err)
    })
  }
}

export function create(book: Book): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.post("create", book).then((response: AxiosResponse<BookResponse>) => {
      dispatch(setResponse(response.data.reqResponse));
    }).catch((err) => {
      console.log(err)
    })
  }
}