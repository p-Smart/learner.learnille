import axios from "axios";
import Cookies from "js-cookie";

export const LearnilleClient = axios.create({
  baseURL: "http://154.53.47.109:3000",
});

LearnilleClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

LearnilleClient.interceptors.response.use(
  (response) => {
    let data = response.data;
    return data;
  },
  (error) => {
    if (error.response) {
      if (error.response?.status === 200) {
        return Promise.resolve(error.response);
      }

      const customError = new Error(
        error.response?.data?.message || error?.message || "An error occurred"
      );
      return Promise.reject(customError);
    } else if (error.request) {
      const customError = new Error(
        error.code || error.message
          ? `${error?.code} | ${error?.message}`
          : "No response received from server"
      );
      return Promise.reject(customError);
    } else {
      return Promise.reject(error);
    }
  }
);
