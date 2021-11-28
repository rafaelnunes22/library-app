import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";
import { AxiosResponse } from 'axios';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: <User>{},
      token: <string>"",
      response: {
        status: <number>0,
        message: <string>""
      }
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {
        user: {
          id: "",
          username: "",
          avatar_url: "",
        },
        token: "",
        response: {
          status: 0,
          message: ""
        }
      }
    },
    setResponse: (state, action) => {
      state.value.response = action.payload;
    },
  }
});

export const { setUser, logout, setResponse } = userSlice.actions;

export default userSlice.reducer;

export function login(username: string, password: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    await api.post("authenticate", {
      username,
      password
    }).then((response: AxiosResponse<UserResponse>) => {
      if (response.data.reqResponse.status <= 201) {
        dispatch(setUser(response.data.result))
      }
      dispatch(setResponse(response.data.reqResponse))
    });
  }
}
