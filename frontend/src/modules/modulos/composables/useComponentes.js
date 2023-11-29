import { defineAsyncComponent } from "vue";

export default () => ({
  Modulos: defineAsyncComponent(() =>
    import("../components/modulos/Modulos.vue")
  ),
  ModuloForm: defineAsyncComponent(() =>
    import("../components/forms/ModuloForm.vue")
  ),
});
