import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerPage from '../views/CustomerPage.vue'
import NewCustomerPage from '../views/NewCustomerPage.vue'
import SalesView from '../views/SalesView.vue'
import SalesOrder from '../views/SalesOrder.vue'
import NewSalesOrder from '../views/NewSalesOrder.vue'
import VehiclesView from '../views/VehiclesView.vue'
import NewVehicleView from '../views/NewVehicleView.vue'
import TireStorage from '../views/TireStorageView.vue'
import ServiceView from '../views/ServiceView.vue'
import ShopView from '../views/ShopView.vue'

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
      path: '/newcustomer',
      name: 'newcustomer',
      component: NewCustomerPage
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView
    },
    {
      path: '/sales',
      name: 'sales',
      component: SalesView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/salesorder',
      name: 'salesorder',
      component: SalesOrder
    },
    {
      path: '/newsalesorder',
      name: 'newsalesorder',
      component: NewSalesOrder
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component:  VehiclesView
    },
    {
      path: '/newvehicle',
      name: 'newvehicle',
      component:  NewVehicleView
    },
    {
      path: '/tirestorage',
      name: 'tirestorage',
      component:  TireStorage
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    }
  ]
})

export default router
