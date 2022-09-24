import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/home'
import Authentic from '../components/authentic'
import Daas from '../components/daas'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/authentic-anti-counterfeit-solutions',
    name: 'authentic',
    component: Authentic
  },
  //   {
  //   path: '/device-as-a-service-cooperate',
  //   name: 'authentic',
  //   component: Authentic
  // },
  //   {
  //   path: '/the-shule-project',
  //   name: 'authentic',
  //   component: Authentic
  // },
  
    {
    path: '/device-as-a-service-solutions',
    name: 'daas',
    component: Daas
  },
  //   {
  //   path: '/authentic-anti-counterfeit-solutions',
  //   name: 'authentic',
  //   component: Authentic
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
