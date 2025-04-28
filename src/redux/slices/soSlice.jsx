import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG_URL, baseUrl } from "../../api/api.config";
import { PostRequestHook } from "../../api/Services";


const { postRequest, putRequest, deleteRequest, getRequest } =PostRequestHook();

export const fetchSOList = createAsyncThunk("so/fetchSOList", async () => {
  // const response = await axios.get(baseUrl + CONFIG_URL.GET_RO_LIST);
    const response = await getRequest(CONFIG_URL.GET_RO_LIST);
  return response.data;
});

const soSlice = createSlice({
  name: "so",
  initialState: {
    so: [], // Ensure this matches the property accessed in useSelector
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSOList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSOList.fulfilled, (state, action) => {
        state.loading = false;
        state.so = action.payload; // Assign the fetched data to the correct property
      })
      .addCase(fetchSOList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default soSlice.reducer;