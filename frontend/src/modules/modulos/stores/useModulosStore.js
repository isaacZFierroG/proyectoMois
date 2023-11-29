import { ref } from "vue";
import { defineStore } from "pinia";
import useRequest from "../../global/composables/requests/useRequest";
import modulosService from "../services/modulosService";

export default defineStore("modulos", () => {
  // instanciacion de dependencias
  const modulosRequest = useRequest(modulosService);

  //obtener modulos
  const modulos = ref([]);
  const asignarModulos = ({ results }) => (modulos.value = results);
  const obtenerModulos = async (params = null) => {
    const { response, error } = await modulosRequest.obtenerElementos(params);

    if (error) {
      console.error(error);
      throw error;
    }

    const { data } = response;
    asignarModulos(data);

    return data;
  };

  //obtener modulo
  const obtenerModulo = async (id, params = null) => {
    const { response, error } = await modulosRequest.obtenerElemento(
      id,
      params
    );

    if (error) {
      console.error(error);
      throw error;
    }

    const { data } = response;
    return data;
  };

  //   crear modulo
  const crearModulo = async (dataModulo) => {
    const { response, error } = await modulosRequest.crearElemento(dataModulo);

    if (error) {
      console.error(error);
      throw error;
    }

    const { data } = response;

    return data;
  };

  return {
    modulos,
    obtenerModulos,
    obtenerModulo,
    crearModulo,
  };
});
