import { ref } from "vue";
import router from "../../../router";
import { storeToRefs } from "pinia";
import useAuthStore from "../stores/authStore";

const RUTA_ACCESO = "modulos-listado";
const RUTA_LOGIN = "auth-login";

export default () => {
  const authStore = useAuthStore();
  const {
    access,
    refresh,
    usuario: datosUsuario,
    usuarioAutenticado,
  } = storeToRefs(authStore);

  //Loguear usuario
  const usuario = ref({
    correo: "admin@mail.com",
    password: "1234",
  });

  const loguearUsuario = async () => {
    const { data, error } = await authStore.loguearUsuario(usuario.value);

    if (error) {
      console.error(error);
      return;
    }

    router.push({ name: RUTA_ACCESO });
  };

  const verificarAutenticacion = () => {
    authStore.obtenerDatosLS();

    if (!usuarioAutenticado.value) {
      authStore.cerrarSesion();
      router.push({ name: RUTA_LOGIN });
    }
  };

  return {
    access,
    refresh,
    datosUsuario,
    usuario,
    usuarioAutenticado,
    loguearUsuario,
    verificarAutenticacion,
    obtenerDatosLS: authStore.obtenerDatosLS,
  };
};
