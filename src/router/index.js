import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import UserProfile from '@/components/UserProfile'
import Menu from '@/components/Menu'
import Todos from '@/components/Todos'
import Events from '@/components/Events'
import Chats from '@/components/Chats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/:id',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'user-profile',
          component: UserProfile
        },
        {
          path: 'todos',
          component: Todos
        },
        {
          path: 'events',
          component: Events
        },
        {
          path: 'chats',
          component: Chats
        }
        
      ]
    }
  ]
})
