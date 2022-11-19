
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from "../views/RegisterView.vue"
import LoginView from '@/views/LoginView.vue';
import TradeView from '@/views/TradeView.vue';
import TradeHistoryView from '@/views/TradeHistoryView.vue'
import CurrentStatusView from '@/views/CurrentStatusView.vue'

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/trade",
    name: "Trade",
    component: TradeView,
  },
  {
    path: "/trade-history",
    name: "TradeHistory",
    component: TradeHistoryView,
  },
  {
    path: "/current-status",
    name: "CurrentStatus",
    component: CurrentStatusView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
