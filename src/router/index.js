import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cuentos from '../views/Cuentos.vue' // Importamos Cuentos.vue
import Test from '../views/Test.vue' // Importamos Test.vue



Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

   
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Temario.vue')
  },
  {
    path: '/cuentos',
    name: 'cuentos',
    component: Cuentos // Sección de Cuentos
  },
  {
    path: '/test',
    name: 'test',
    component: Test // Sección de Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
