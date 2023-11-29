import service from "../../global/services/service";

const recurso = "login/";

export default {
  loguearUsuario({ data }) {
    return service.post(recurso, data);
  },
  actualizarToken({ data }) {
    return service.post(`${recurso}refresh/`, data);
  },
};
