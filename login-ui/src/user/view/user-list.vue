<template>
  <div id="box">
    <div id="userTable">
      <el-table id="userForm" class="userForm" :data="page.userList">
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Message} from 'element-ui'
  const api = require('@/api/index.js')(axios);
  export default {
    data:function () {
      return {
        page:{
          userList: [],
          total:0,
          pageIndex:1,
          pageSize:10
        },
        searchForm: {
          id:'',
          username:''
        }

      }
    },
    methods: {
      query() {
        api.queryUserList().then(res => {
          const {
            data
          } = res;
          if (data.status === '0000') {
            this.page.userList = data.data;
          } else {
            this.$message(data.message);
          }
        })
      }
    },
    mounted() {
      this.query();
    }
  }

</script>

<style lang="less">
  .userTable {
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
  .userForm {
    .el-table {
      display: inline-block;
      width: 70%;
    }
  }
</style>
