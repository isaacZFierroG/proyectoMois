import { ref } from "vue";
import { storeToRefs } from "pinia";
import useModulosStore from "../stores/useModulosStore";
import useModalesStore from "../stores/useModalesStore";
import useComponentes from "./useComponentes";

export default () => {
  const modulosStore = useModulosStore();
  const modalesStore = useModalesStore();
  const { modulos } = storeToRefs(modulosStore);
  const { moduloForm, datosModulo, estilosModuloModal } = storeToRefs(modalesStore);
  const { Modulos, ModuloForm } = useComponentes();

  const obtenerModulos = async (params = null) => {
    try {
      const res = await modulosStore.obtenerModulos(params);
      console.log("respuesta obtener modulos");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const infoModulo = ref(null);
  const obtenerModulo = async (id, params = null) => {
    try {
      const res = await modulosStore.obtenerModulo(id, params);
      console.log("respuesta de obtener modulo");
      console.log(res);
      infoModulo.value = res;
    } catch (error) {
      console.error(error);
    }
  };

  //crear modulo
  const crearModulo = async (dataModulo) => {
    try {
      const res = await modulosStore.crearModulo(dataModulo);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    Modulos,
    ModuloForm,

    modulos,
    obtenerModulos,
    crearModulo,

    infoModulo,
    obtenerModulo,

    moduloForm,
    datosModulo,
    estilosModuloModal,
    editarModulo: modalesStore.editarModulo,
    mostrarModuloForm: modalesStore.mostrarModuloForm,
    ocultarModuloForm: modalesStore.ocultarModuloForm,
  };
};
