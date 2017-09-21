<template>
  <div class="hello">
    <div>
      <h3>登录</h3>
    </div>
    <el-form id="login" v-modle="loginForm">
      <el-input :bind="username"></el-input>
      <el-input :bind="password"></el-input>
      <el-button></el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      loginForm: {
        username:'',
        password:''
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
