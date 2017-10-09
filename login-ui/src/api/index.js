module.exports = function (http) {
  return {
    //验证用户登录
    validateUserLogin(param){
      return http.post('/login',param);
    },
    //查询用户列表
    queryUserList(){
      return http.get('/login/getUserList');
    },
    //查询电影列表
    queryMovieList(){
      return http.get('/movie/getMovieList');
    },
    queryMovie(param){
      return http.post('/movie/getMovieByExample',param)
    },
    queryMovieByID(id){
      return http.get('/movie/getMovieByID/'+id);
    },
    //新增评论
    addComment(param){
      return http.post('movie/addComment',param);
    }
  }
}
