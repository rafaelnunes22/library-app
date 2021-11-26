import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: 0,
      username: "",
      name: "",
    }
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = {
        id: 0,
        username: "",
        name: "",
      };
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;























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