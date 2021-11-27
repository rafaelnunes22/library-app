import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    value: {
      books: []
    },
  },
  reducers: {
    setBooks: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { setBooks } = bookSlice.actions;

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
