import EditPage from '@/pages/EditPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EvaluationPage from '@/pages/EvaluationPage.vue'

const routes = [
  {
    path: '/',
    component: EditPage
  },
  {
    path: '/evaluation',
    component: EvaluationPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
