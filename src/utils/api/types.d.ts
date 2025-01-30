import axios from "axios";

declare module "axios" {
  interface AxiosRequestConfig {}
  interface AxiosResponse {
    data: Array | Object | null;
    message?: string;
  }
}
