import Vue from "vue";
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import T from "@/components/T"
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path:"/t",
      component:T
    }
  ]
});

export default router;
