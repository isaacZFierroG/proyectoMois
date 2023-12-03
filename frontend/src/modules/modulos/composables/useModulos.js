import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import useModulosStore from "../stores/useModulosStore";
import useModalesStore from "../stores/useModalesStore";
import useComponentes from "./useComponentes";

export default () => {
  const modulosStore = useModulosStore();
  const modalesStore = useModalesStore();
  const { modulos } = storeToRefs(modulosStore);
  const { moduloForm, datosModulo, estilosModuloModal } =
    storeToRefs(modalesStore);

  const obtenerModulos = async (params = null) => {
    try {
      const res = await modulosStore.obtenerModulos(params);
      const { results } = res;
      console.log("respuesta obtener modulos");
      console.log(res);
      listadoDatos.value = results;
    } catch (error) {
      console.error(error);
    }
  };

  const infoModulo = ref(null);
  const listadoDatos = ref([]);
  const moduloMac = computed(() => infoModulo.value?.mac ?? "");
  const moduloMina = computed(() => infoModulo.value?.mina ?? "");
  const moduloArea = computed(() => infoModulo.value?.area ?? "");
  const moduloSensores = computed(() => infoModulo.value?.sensores ?? []);
  const dataset = computed(() => {
    if (listadoDatos.value.length === 0) return [];

    return moduloSensores.value.map(({ id: idSensor, clave }) => {
      const series = listadoDatos.value
        .filter(({ sensor }) => sensor === idSensor)
        .map(({ valor, fecha_creacion }) => {
          return {
            x: fecha_creacion,
            y: valor,
          };
        })
        .toReversed();
      // .slice(0, 11);

      return {
        name: clave,
        data: series,
      };
    });
  });
  const datosRecientes = computed(() =>
    listadoDatos.value.length === 0
      ? []
      : moduloSensores.value
          .map(({ id: idSensor, clave }) => {
            const datoReciente = listadoDatos.value.find(
              ({ sensor }) => sensor === idSensor
            );

            if (datoReciente) datoReciente["clave"] = clave;

            return datoReciente;
          })
          .filter((dato) => dato !== undefined)
  );

  const obtenerDatosModulo = async (params = null) => {
    try {
      const res = await modulosStore.obtenerDatosModulo(params);
      const { results } = res;
      listadoDatos.value = results;
      console.log("respuesta de los datos");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerModulo = async (id, params = null) => {
    try {
      console.log("ID DEL MODULO", id);
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
    ...useComponentes(),

    modulos,
    obtenerModulos,
    crearModulo,
    obtenerDatosModulo,

    infoModulo,
    dataset,
    moduloMac,
    moduloArea,
    moduloMina,
    moduloSensores,
    datosRecientes,
    obtenerModulo,

    moduloForm,
    datosModulo,
    estilosModuloModal,
    editarModulo: modalesStore.editarModulo,
    mostrarModuloForm: modalesStore.mostrarModuloForm,
    ocultarModuloForm: modalesStore.ocultarModuloForm,
  };
};
