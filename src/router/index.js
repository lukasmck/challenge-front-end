import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import Create from "../views/Create.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/post/:id/:edit",
    name: "Edit",
    component: Create,
    props: ({ params }) => ({
      id: Number.parseInt(params.id, 10) || 0,
      edit: params.edit,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
