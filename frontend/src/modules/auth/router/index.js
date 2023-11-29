const rutas = [
  {
    path: "/",
    name: "auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "auth-login",
        component: () => import("../views/LoginView.vue"),
      },
    ],
  },
];

export default rutas;
