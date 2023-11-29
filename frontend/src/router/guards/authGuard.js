import useAuth from "../../modules/auth/composables/useAuth";

const RUTA_NO_AUTENTICADO = "auth-login";
const RUTA_AUTENTICADO = "modulos-listado";

export default (to, from, next) => {
  const { usuarioAutenticado } = useAuth();
  const { name } = to;

  if (!usuarioAutenticado.value && name !== RUTA_NO_AUTENTICADO) {
    next({ name: RUTA_NO_AUTENTICADO });
  } else {
    next();
  }
};
