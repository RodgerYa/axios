const key = 'LOGIN_USER'

export default {
  setUser(param) {
    let data = param;
    if (data != null && data != '')
    {
      localStorage[key] = JSON.stringify(data);
    }
  },
  getUser() {
    let data = localStorage[key];
    let user = {}
    if (data != null && data != ''){
      user = JSON.parse(data);
    }
    return user;
  }
}
