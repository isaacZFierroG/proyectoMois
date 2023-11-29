import axios from "axios";
import {
  requestInterceptor,
  requestErrorInterceptor,
} from "./interceptors/requestInterceptors";
import {
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors/responseInterceptors";

const ls = localStorage;
const baseURL = "http://127.0.0.1:8000/api/";
const instancia = axios.create({
  baseURL,
});

instancia.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

instancia.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default instancia;
