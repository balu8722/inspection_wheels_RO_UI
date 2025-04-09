import axios from 'axios'
import { baseUrl, CONFIG_URL } from "./api.config"
// import { store } from '../redux/store';


const axiosInstance = axios.create({
    baseURL: baseUrl
})

// function refreshToken() {
//     return axiosInstance.post(configUrl.refreshTokren, {
//         refreshToken: store.getState().UIStore.auth.refresh_token
//     });
// }

axiosInstance.interceptors.response.use(
    (response) => {
        return new Promise((resolve, reject) => {
            resolve(response);
        })
    },
    async (error) => {

        if (error.response.status === 403) {
            // const rs = await refreshToken();
            // const { accessToken } = rs.token;
            // store.dispatch(setAccessToken(rs.token))
            // axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            // store.dispatch(setExpired(true))
        }
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
);

axiosInstance.interceptors.request.use(
    (request) => {
    //     let authToken = store.getState().users.access_token
    //   if(authToken) request.headers["Authorization"] = `Bearer ${authToken}`

        return new Promise((resolve, reject) => {
            resolve(request);
        })
    },
    (error) => {
        if (!error.request) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }
);

export default axiosInstance;