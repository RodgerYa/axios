module.exports = function (http) {
  return {
    //验证用户登录
    validateUserLogin(param){
      return http.post('/user/validate',param);
    }
  }
}
