import { createRouter, createWebHistory } from "vue-router";
import authRouter from "../modules/auth/router";
import modulosRouter from "../modules/modulos/router";
import authGuard from "./guards/authGuard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRouter, ...modulosRouter],
});

router.beforeEach(authGuard);

export default router;
