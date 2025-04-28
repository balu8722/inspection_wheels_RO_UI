import axios from 'axios'
import { baseUrl } from "./api.config"
import { showNotification } from '../components/Notifications';


const axiosInstance = axios.create({
    baseURL: baseUrl
})

let reduxStore = null;

// Function to inject store AFTER it's created
export const injectStore = (_store) => {
    reduxStore = _store;
};

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
        
        if (error.response.status === 401 && error.response.data.message=="Token expired") {
            localStorage.clear();
            showNotification("error","Session expired, Please login again")
            reduxStore?.dispatch({type:"users/resetAuth"})
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
        let authToken = localStorage.getItem('token');
      if(authToken) request.headers["Authorization"] = `Bearer ${authToken}`

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