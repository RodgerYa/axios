import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/user/view/login.vue'

Vue.use(Router)
Vue.use(Login)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
