import Layout from '@/components/Layout.vue'
import MovieDetail from '@/user/view/movie-detail.vue'
import MovieList from '@/user/view/movie-list.vue'
import MoviePage from '@/user/view/movie-page.vue'

export default {
  path:'/movie',
  name:'movieList',
  component:Layout,
  children: [
    {
      path:'/movie/movie-list',
      component: MovieList
    },
    {
      path:'/movie/movie-detail',
      component:MovieDetail
    },
    {
      path:'/movie/movie-page',
      component:MoviePage
    },

  ]
}
