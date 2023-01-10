import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerPage from '../views/CustomerPage.vue'
import SalesView from '../views/SalesView.vue'
import VehiclesView from '../views/VehiclesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerPage
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView
    },
    {
      path: '/sales',
      name: 'sales',
      component:  SalesView
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component:  VehiclesView
    }
  ]
})

export default router
