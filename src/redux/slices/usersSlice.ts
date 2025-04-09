import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

// Define Async Thunk to Fetch Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(BASE_URL.USERS);
  return response.data;
});
// Async Thunk to Fetch Posts
export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
  const response = await axios.get(BASE_URL.POSTS);
  return response.data;
});
//

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    posts: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {}, // No regular reducers needed for now
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

export default usersSlice.reducer;
