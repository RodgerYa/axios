import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/user/view/login.vue'
import UserList from '@/user/view/user-list.vue'

Vue.use(Router)
Vue.use(Login)
Vue.use(UserList)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/user/user-list',
      name:'userList',
      component:UserList
    }
  ]
})
