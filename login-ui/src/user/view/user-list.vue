<template>
  <div id="box">
    <el-table id="userForm" class="userForm" :data="userList">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data:function () {
      return {
        userList: {
          id:'',
          username:''
        }
      }
    },
    methods: {
      query() {

      }
    },
    mounted() {
      this.query();
    }
  }

</script>
