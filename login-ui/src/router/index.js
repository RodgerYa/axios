import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/user/view/login.vue'
import UserList from '@/user/view/user-list.vue'
import MovieList from '@/user/view/movie-list.vue'

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
      path:'/login/user-list',
      name:'userList',
      component:UserList
    },
    {
      path:'/movie/movieList',
      name:'movieList',
      component:MovieList
    }
  ]
})
