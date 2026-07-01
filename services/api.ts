import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(
    async config => {
        console.log('Request Sent:', config.url);

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);
api.interceptors.response.use(
    response => {
        console.log('Response Received:', response.status);

        return response;
    },
    error => {
        console.log('Response Error:', error.response?.status);

        return Promise.reject(error);
    },
);

export default api;