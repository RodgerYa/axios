module.exports = function (http) {
  return {
    //验证用户登录
    validateUserLogin(param){
      return http.post('/user/validate',param);
    },
    //查询用户列表
    queryUserList(){
      return http.get('/user/getUserList');
    }
  }
}
