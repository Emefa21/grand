import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },

  {
    path: '/leads',
    name: 'Leads',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Leads.vue')
  },

  {
    path: '/customers',
    name: 'Customers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Customers.vue')
  },

  {
    path: '/prospects',
    name: 'Prospects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Prospects.vue')
  },

  {
    path: "/reset",
    name: "Reset",
    component: () => import("../views/Reset.vue"),
    // meta: {
    //   requiresAuth: true,
    // }
  },

  {
    path: "/forgotpassword",
    name: "Forgotpassword",
    component: () => import("../views/Forgotpassword.vue"),
    // meta: {
    //   requiresAuth: true,
    // }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
