import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
// import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
});

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
