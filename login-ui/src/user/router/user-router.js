import RouterView from '@/components/RouterView.vue'
import MovieDetail from '@/user/view/movie-detail.vue'
import MovieList from '@/user/view/movie-list.vue'

export default {
  path:'/movie',
  name:'movieList',
  component:RouterView,
  children: [
    {
      path:'/movie/movie-list',
      component: MovieList
    },
    {
      path:'/movie/movie-detail',
      component:MovieDetail
    }
  ]
}
