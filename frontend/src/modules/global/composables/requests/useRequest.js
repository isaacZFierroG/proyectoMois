import { ref, unref } from "vue";

const cargando = ref(false);

export default (servicioModulo) => {
  const servicio = unref(servicioModulo);

  const obtenerElementos = async (params = null) => {
    let response, error;

    try {
      response = await servicio.obtenerElementos(params);
    } catch (err) {
      error = err;
    } finally {
      return { response, error };
    }
  };

  const obtenerElemento = async (id, params = null) => {
    let response, error;

    try {
      response = await servicio.obtenerElemento(id, params);
    } catch (err) {
      error = err;
    } finally {
      return { response, error };
    }
  };

  const crearElemento = async (data) => {
    let response, error;

    try {
      response = await servicio.crearElemento(data);
    } catch (err) {
      error = err;
    } finally {
      return { response, error };
    }
  };

  const editarElemento = async (id, data) => {
    let response, error;

    try {
      response = await servicio.editarElemento(id, data);
    } catch (err) {
      error = err;
    } finally {
      return { response, error };
    }
  };

  const customEndpoint = async (metodo, conf) => {
    let response, error;

    try {
      response = await servicio[metodo](conf);
    } catch (err) {
      error = err;
    } finally {
      return { response, error };
    }
  };

  return {
    cargando,

    obtenerElemento,
    obtenerElementos,
    crearElemento,
    editarElemento,
    customEndpoint,
  };
};
