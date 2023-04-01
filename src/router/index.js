import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Help from '@/views/Help.vue'
import Blog from '@/views/Blog.vue'
import ReservationView from '@/views/ReservationView.vue'
import Test from '@/views/Test.vue'

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
    component: About
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/blog',
    name: 'blog',
    component: Test,
  },
  {
    path: '/reservation',
    name: 'reservatio',
    component: ReservationView
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


