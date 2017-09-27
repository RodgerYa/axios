import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/user/view/login.vue'
import UserRouter from '@/user/router/user-router.js'

Vue.use(Router)
export default new Router({
  routes: [
    UserRouter,
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
