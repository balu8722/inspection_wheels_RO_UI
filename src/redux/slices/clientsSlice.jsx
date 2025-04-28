import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {PostRequestHook} from "../../api/Services"
import { CONFIG_URL } from "../../api/api.config";

const {postRequest,putRequest,deleteRequest,getRequest}=PostRequestHook();

// Define get vehicle types
export const fetchVehicleTypes = createAsyncThunk("clients/fetchVehicleTypes", async () => {
  const response = await getRequest(CONFIG_URL.GET_VEHICLE_TYPES);
  return response?.data||[];
});
// get vehicle category
export const fetchVehicleCategory = createAsyncThunk("clients/fetchVehicleCategory", async () => {
  const response = await getRequest(CONFIG_URL.GET_VEHICLE_CATEGORY);
  return response?.data||[];
});

// get Client list
export const fetchClientList = createAsyncThunk("clients/fetchClientList", async (data) => {
  // const response = await getRequest(`${CONFIG_URL.GET_CLIENTS_LIST}${data.rowPerPage}/${data.pageNo}`);
  const URL = CONFIG_URL.GET_CLIENTS_LIST.replace(':rowperpage',data.rowPerPage).replace(':pgno',data.pageNo)
  const response = await getRequest(URL);
  return response?.data||{};
});


const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    vehicleTypes:[],
    vehicleCategories:[],
    loading: false,
    error: null ,
  },
  reducers: { }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicleTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicleTypes = action.payload;
      })
      .addCase(fetchVehicleTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      })
      
      // Handling vehiclecategory
      .addCase(fetchVehicleCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicleCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicleCategories = action.payload;
      })
      .addCase(fetchVehicleCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const {}=clientsSlice.actions;

export default clientsSlice.reducer;
