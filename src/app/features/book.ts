import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";



export const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: {
      books: <Book[]>[],
      book: <Book>{}
    },
  },
  reducers: {
    setBooks: (state, action) => {
      state.value = action.payload;
    },
    setBook: (state, action) => {
      state.value.book = action.payload;
    },
  }
});

export const { setBooks, setBook } = bookSlice.actions;

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
      console.log(response)
      dispatch(setBook(response.data));
    }).catch((err) => {
      console.log(err)
    })
  }
}
