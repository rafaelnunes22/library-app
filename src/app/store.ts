import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import bookReducer from "./features/book";



export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;