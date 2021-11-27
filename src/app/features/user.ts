import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: {
        id: "",
        username: "",
        name: "",
      },
      token: "",
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = {
        user: {
          id: "",
          username: "",
          name: "",
        },
        token: "",
      }
    }
  }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;

export function login(username: string, password: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.post("authenticate", {
      username,
      password
    }).then((response: any) => {
      dispatch(setUser(response.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}
