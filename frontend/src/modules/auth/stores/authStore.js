import { ref, computed } from "vue";
import { defineStore } from "pinia";
import useRequest from "../../global/composables/requests/useRequest";
import authService from "../services/authService";

const ls = localStorage;

export default defineStore("auth", () => {
  const authRequest = useRequest(authService);

  const access = ref(null);
  const refresh = ref(null);
  const usuario = ref(null);
  const usuarioAutenticado = computed(() => usuario.value?.id);

  const obtenerDatosLS = () => {
    access.value = ls.getItem("access");
    refresh.value = ls.getItem("refresh");
    usuario.value = ls.getItem("usuario")
      ? JSON.parse(ls.getItem("usuario"))
      : undefined;
  };

  const asignarDatosStore = (data) => {
    access.value = data.access;
    refresh.value = data.refresh;
    usuario.value = data.usuario;
  };

  const guardarDatosLS = ({ access, refresh, usuario }) => {
    ls.setItem("access", access);
    ls.setItem("refresh", refresh);
    ls.setItem("usuario", JSON.stringify(usuario));
  };
  const cerrarSesion = () => {
    ls.clear();
    access.value = null;
    refresh.value = null;
    usuario.value = null;
  };

  const guardarDatos = (autenticacion) => {
    asignarDatosStore(autenticacion);
    guardarDatosLS(autenticacion);
  };

  const loguearUsuario = async (usuario) => {
    const {
      response: { data },
      error,
    } = await authRequest.customEndpoint("loguearUsuario", {
      data: usuario,
    });

    guardarDatos(data);

    return { data, error };
  };

  const actualizarToken = async (refreshToken) => {
    const {
      response: { data },
      error,
    } = await authRequest.customEndpoint("actualizarToken", {
      data: refreshToken,
    });

    return { data, error };
  };

  return {
    access,
    refresh,
    usuario,
    usuarioAutenticado,
    loguearUsuario,
    actualizarToken,
    obtenerDatosLS,
    cerrarSesion,
  };
});
