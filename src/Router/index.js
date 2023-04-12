import { createRouter, createWebHashHistory } from "vue-router";

import firstPage from "../components/firstPage.vue"

const routes = [
    {
        path: '/',
        component: firstPage
    }
];
const router = createRouter({
    routes,
    history: createWebHashHistory(),
  });

  
  export default router;