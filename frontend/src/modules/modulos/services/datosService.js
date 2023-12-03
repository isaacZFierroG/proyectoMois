import service from "../../global/services/service";

const recurso = "datos/";

export default {
  obtenerElementos(params = null) {
    return service.get(recurso, { params });
  },
  obtenerElemento(id, params = null) {
    return service.get(`${recurso}${id}/`, { params });
  },
  crearElemento(data) {
    return service.post(recurso, data);
  },
};
