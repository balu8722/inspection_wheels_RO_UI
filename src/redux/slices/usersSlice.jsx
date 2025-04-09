import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {PostRequestHook} from "../../api/Services"
import { CONFIG_URL } from "../../api/api.config";

const {postRequest,putRequest,deleteRequest,getRequest}=PostRequestHook()

// Define Async Thunk to Fetch Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getRequest(CONFIG_URL.USERS);
  return response.data;
});
// Async Thunk to Fetch Posts
export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
  const response = await getRequest(CONFIG_URL.POSTS);
  return response.data;
});
//

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isAuth:false,
    userdata:null,
    usersLit: [],
    posts: [],
    loading: false,
    error: null ,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.userdata = action.payload.data;
    },
  }, // No regular reducers needed for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      })
      //
      // Handling Posts API
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const {setIsAuth}=usersSlice.actions;

export default usersSlice.reducer;
