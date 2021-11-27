import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { AppDispatch } from '../store';
import api from "../../api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: {
        id: 0,
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
          id: 0,
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

//criar dto pra response























// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'

// // Define a type for the slice state
// interface CounterState {
//   value: number
// }

// // Define the initial state using that type
// const initialState: CounterState = {
//   value: 0
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     increment: state => {
//       state.value += 1
//     },
//     decrement: state => {
//       state.value -= 1
//     },
//     // Use the PayloadAction type to declare the contents of `action.payload`
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     }
//   }
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer