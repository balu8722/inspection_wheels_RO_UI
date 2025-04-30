// import { ENVDATA } from "../Conflict/Conflct"

export const baseUrl = import.meta.env.VITE_API_URL

export const CONFIG_URL = {
  // USERS: `/users`,
  POSTS: `/posts`,
  COMMENTS: `/comments`,
  TODOS: `/todos`,
  // auth apis
  SIGNIN: "/admin/signin",
  FORGOT_PASSWORD: "/admin/forgotpassword/",
  RESET_PASSWORD_ADMIN: "/admin/resetpassword/",
  GET_PROFILE_DATA: "/admin/userdata",

  // clients -- vehicle types
  GET_VEHICLE_TYPES: "/client/listVehicleType",
  UPDATE_VEHICLE_TYPES: "/client/updateVehicleType/",
  CREATE_VEHICLE_TYPES: "/client/createVehicleType",
  DELETE_VEHICLE_TYPES: "/client/deleteVehicleType/",

  // vehicle category
  GET_VEHICLE_CATEGORY: "/client/listVehicleCategory",
  UPDATE_VEHICLE_CATEGORY: "/client/updateVehicleCategory/",
  CREATE_VEHICLE_CATEGORY: "/client/createVehicleCategory",
  DELETE_VEHICLE_CATEGORY: "/client/deleteVehicleCategory/",

  // client
  GET_CLIENTS_LIST: "/client/list/:rowperpage/:pgno",
  UPDATE_CLIENT_BY_ID: "/client/updateVehicleCategory/",
  CREATE_CLIENT: "/client/createVehicleCategory",
  DELETE_CLIENT_BY_ID: "/client/deleteVehicleCategory/",

  // SO apis
  CREATE_SO: "/so/create",
  GET_SO_BY_ID: "/so/list",
  UPDATE_SO_BY_ID: "/so/update",
  GET_RO_LIST: "/so/list/:rowperpage/:pgno",
  DEACTIVATE_SO_BY_ID: "/so/delete/:soId",
  ACTIVATE_SO_BY_ID: "/so/activate/:soId",

  // Valuator APIS
  CREATE_VALUATOR: "/valuator/create",
  UPDATE_VALUATOR_BY_ID: "/valuator/update",
  GET_VALUATOR_BY_ID: "/valuator/list",
  GET_VALUATOR_LIST: "/valuator/list/:rowperpage/:pgno",
  DEACTIVATE_VALUATOR_BY_ID: "/valuator/delete/:valuatorId",
  ACTIVATE_VALUATOR_BY_ID: "/valuator/activate/:valuatorId",
};