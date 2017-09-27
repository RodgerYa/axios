<template>
  <div id="box" @keyup.enter="submitForm()" class="box">
    <span>登录</span>
    <el-form :model="userForm" label-width="80px" class="demo-userForm" ref="userForm">
      <el-form-item label="用户名：" prop="username">
        <el-input type="text" v-model="userForm.username" auto-complete="off"
                  placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="userForm.password" auto-complete="off"
                  placeholder="请输入用户密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  import axios from 'axios'
  import {Message} from 'element-ui'
  const api = require('@/api/index.js')(axios);
  export default {
    data: function () {
      return {
        userForm: {
          username:'',
          password:''
        },
        rules: {

        },
      }
    },
    methods: {
      submitForm() {
        api.validateUserLogin(this.userForm).then(res => {
            const {
              data
            } =res;
            if(data.status === '1000') {
              Message.error(data.message);
              console.log(data);
            } else if (data.status === '0000' ) {
              console.log(data);
              this.$message(data.message);
              this.jumpToMovieList();
            } else {
              this.$message(data.message);
              console.log(data);
            }
        }).catch(error =>{
          alert(error+"GG");
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      jumpToMovieList(){
        this.$router.push({path:'movie/movie-list'})
      }
    }

  }
</script>

<style lang="less">
  .box {
    display:inline-block;
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
    width:38%;
    .span {
      font-size: large;
      font: 黑体;
      color: black;
      padding: 5px;
      margin-bottom: 5px;
    }
    .el-form {
      padding: 5px;
      width: 100%;
      .el-input {
        width: 100%
      }
    }
  }
</style>

