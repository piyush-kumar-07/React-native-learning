import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6a6a0be5eb87a96865a81f4d.mockapi.io',
});

api.interceptors.request.use(
    async config => {
        console.log('Request Sent:', config.url);
        return config;
    },
    error => Promise.reject(error),
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