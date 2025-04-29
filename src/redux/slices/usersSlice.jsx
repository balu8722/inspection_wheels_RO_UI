import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {PostRequestHook} from "../../api/Services"
import { CONFIG_URL } from "../../api/api.config";

const {postRequest,putRequest,deleteRequest,getRequest}=PostRequestHook();

// Define get user data
export const fetchUserProfileData = createAsyncThunk("users/fetchUserProfileData", async () => {
  const response = await getRequest(CONFIG_URL.GET_PROFILE_DATA);
  return response.data;
});

// Async Thunk to Fetch Posts
export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
  const response = await getRequest(CONFIG_URL.POSTS);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isAuth:false,
    role:null,
    access_token:null,
    refreshtoken:null,
    userdata:null,
    usersLit: [],
    posts: [],
    loading: false,
    error: null ,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.access_token = action.payload.token;
      state.refreshtoken = action.payload.refreshtoken;
      state.role = action.payload.role;
    },
    resetAuth:(state)=>{
      state.isAuth = false;
      state.access_token = null;
      state.refreshtoken = null;
      state.role = null;
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfileData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.userdata = action.payload;
      })
      .addCase(fetchUserProfileData.rejected, (state, action) => {
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
