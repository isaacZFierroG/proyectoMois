const rutas = [
  {
    path: "/modulos",
    name: "modulos",
    component: () => import("../layouts/ModulosLayout.vue"),
    children: [
      {
        path: "",
        name: "modulos-listado",
        component: () => import("../views/ListadoView.vue"),
      },
      {
        path: ":idModulo",
        name: "modulos-info",
        component: () => import("../views/ModuloView.vue"),
      },
    ],
  },
];

export default rutas;
