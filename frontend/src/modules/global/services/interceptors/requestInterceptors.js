import useAuth from "../../../auth/composables/useAuth";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";
const recurso = "login/refresh/";
const ls = localStorage;

const validarCaducidadToken = async ({ access, refresh }) => {
  const tokenDecode = jwtDecode(access);
  const tiempoExpiracion = tokenDecode.exp * 1000;
  const tiempoActual = new Date().getTime();

  console.log("tiempo expiracion", tiempoExpiracion);
  console.log("tiempo actual", tiempoActual);

  if (tiempoActual < tiempoExpiracion) return;

  console.log("el token ya caduco");
  try {
    const { obtenerDatosLS } = useAuth();
    const res = await axios.post(`${baseURL}${recurso}`, { refresh });
    const { access } = res.data;

    ls.setItem("access", access);
    obtenerDatosLS();
  } catch (error) {
    console.error(error);
    ls.clear();
  }
};

export const requestInterceptor = (req) => {
  const { access, refresh } = useAuth();

  if (!access.value) return req;

  validarCaducidadToken({ access: access.value, refresh: refresh.value });

  req.headers = {
    Authorization: `Bearer ${access.value}`,
    "Content-type": "application/json; charset=utf-8",
  };

  return req;
};

export const requestErrorInterceptor = (err) => {
  console.log("request error intercetor");
  console.log(err);

  return err;
};
