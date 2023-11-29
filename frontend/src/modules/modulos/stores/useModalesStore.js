import { ref, computed } from "vue";
import { defineStore } from "pinia";

export default defineStore("modales-modulos", () => {
  // control modal Form
  const datosModulo = ref({
    mac: '',
    mina: '',
    area: '',
    sensores: []
  });
  const moduloForm = ref(false);
  const estilosModuloModal = computed(() => ({
    width: "30%",
  }));

  const asignarDatosModulo = ({ mac, mina, area, sensores }) => {
    console.log('asignando datos del modulo');
    datosModulo.value.mac = mac;
    datosModulo.value.mina = mina;
    datosModulo.value.area = area;
    datosModulo.value.sensores = sensores;
    console.log(datosModulo.value);
  }
  const editarModulo = (data) => {
    console.log('datos entrantes del modulo');
    console.log(data);
    asignarDatosModulo(data);
    mostrarModuloForm();
  }
  const mostrarModuloForm = () => (moduloForm.value = true);
  const ocultarModuloForm = () => (moduloForm.value = false);

  return {
    moduloForm,
    datosModulo,
    estilosModuloModal,
    editarModulo,
    mostrarModuloForm,
    ocultarModuloForm,
  };
});
