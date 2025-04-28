import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import clientsReducer from "./slices/clientsSlice";
import soReducer from "./slices/soSlice"
// import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    clients:clientsReducer,
    so:soReducer
  },
});
