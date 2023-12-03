import { defineAsyncComponent } from "vue";
import { NModal } from "naive-ui";

export default () => ({
  NModal,
  Modulos: defineAsyncComponent(() =>
    import("../components/modulos/Modulos.vue")
  ),
  ModuloForm: defineAsyncComponent(() =>
    import("../components/forms/ModuloForm.vue")
  ),
});
