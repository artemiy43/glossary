export default [
  {
    path: "/",
    name: "GlossaryView",
    component: () => import("../views/GlossaryView.vue"),
    children: [],
  },
  {
    path: "/graph",
    name: "GraphView",
    component: () => import("../views/GraphView.vue"),
    children: [],
  },
];
