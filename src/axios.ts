import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }

        // If the error is not handled, return a rejected promise
        return Promise.reject(error);
    }
);

export default axiosInstance;
