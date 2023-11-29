import { defineAsyncComponent } from "vue";

export default () => ({
  Modulos: defineAsyncComponent(() =>
    import("../components/modulos/Modulos.vue")
  ),
  ModalCrear: defineAsyncComponent(() =>
    import("../components/basicos/ModalCrear.vue")
  ),
});
