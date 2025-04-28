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
    GET_PROFILE_DATA:"/admin/userdata"
}