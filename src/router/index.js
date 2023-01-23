import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../views/Menu'

const routes = [
  {
    path: '/',
    name: 'menu',
    component: Menu
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/Audio')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video')
  },
  {
    path: '/video/procedure',
    name: 'procedure',
    component: () => import('../views/Procedure')
  },
]

const pathname = process.env.NODE_ENV === 'production'
  ? window.location.pathname
  : process.env.BASE_URL

const router = createRouter({
  history: createWebHashHistory(pathname),
  routes
})

export default router
