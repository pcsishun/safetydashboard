import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SafetyDashboradView from '../views/SafetyDashboradView.vue'
import Equipment from '../views/Equipment.vue'
import SensorDetector from '../views/SensorDetector.vue'
import User from '../views/User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SafetyDashboradView',
      component: SafetyDashboradView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/sensordetection',
      name: 'SensorDetector',
      component: SensorDetector
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})

export default router
