import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import soReducer from "./slices/soSlice"
// import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    so:soReducer
    
  },
});
