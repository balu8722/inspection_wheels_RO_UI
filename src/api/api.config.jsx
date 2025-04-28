// import { ENVDATA } from "../Conflict/Conflct"

export const baseUrl = import.meta.env.VITE_API_URL

export const CONFIG_URL = {
    // USERS: `/users`,
    POSTS: `/posts`,
    COMMENTS: `/comments`,
    TODOS: `/todos`,
    // auth apis
    SIGNIN:"/admin/signin",
    FORGOT_PASSWORD:"/admin/forgotpassword/",
    RESET_PASSWORD_ADMIN:"/admin/resetpassword/",
    GET_PROFILE_DATA:"/admin/userdata",

    // clients -- vehicle types
    GET_VEHICLE_TYPES:"/client/listVehicleType",
    UPDATE_VEHICLE_TYPES:"/client/updateVehicleType/",
    CREATE_VEHICLE_TYPES:"/client/createVehicleType",
    DELETE_VEHICLE_TYPES:"/client/deleteVehicleType/",

    // vehicle category
    GET_VEHICLE_CATEGORY:"/client/listVehicleCategory",
    UPDATE_VEHICLE_CATEGORY:"/client/updateVehicleCategory/",
    CREATE_VEHICLE_CATEGORY:"/client/createVehicleCategory",
    DELETE_VEHICLE_CATEGORY:"/client/deleteVehicleCategory/",

    // client 
    GET_CLIENTS_LIST:"/client/list/",
    UPDATE_CLIENT_BY_ID:"/client/updateVehicleCategory/",
    CREATE_CLIENT:"/client/createVehicleCategory",
    DELETE_CLIENT_BY_ID:"/client/deleteVehicleCategory/",

}