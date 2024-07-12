import axios from "axios";

const eventService = axios.create({
    baseURL: 'https://api-test.learnille.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

eventService.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

eventService.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            console.error('Network error. Please check your connection.')
        }
        return Promise.reject(error);
    }
);

export const CHECK_USERNAME_SERVICE = (username) => {
    return eventService.get('auth/check-username', {
        params: {
            username: username
        }
    });
};
