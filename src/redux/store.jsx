import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import clientsReducer from "./slices/clientsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    clients:clientsReducer
  },
});
