import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import ListDetail from "@/views/ListDetail";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/list-detail",
      name: "ListDetail",
      component: ListDetail
    }
  ]
});

export default router;
