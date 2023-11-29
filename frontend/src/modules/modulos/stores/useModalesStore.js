import { ref, computed } from "vue";
import { defineStore } from "pinia";

export default defineStore("modales-modulos", () => {
  // control modal crear modulo
  const modalModulo = ref(false);
  const estilosModuloModal = computed(() => ({
    width: "30%",
  }));
  const mostrarModalModulo = () => (modalModulo.value = true);
  const ocultarModalModulo = () => (modalModulo.value = false);

  return {
    modalModulo,
    estilosModuloModal,
    mostrarModalModulo,
    ocultarModalModulo,
  };
});
