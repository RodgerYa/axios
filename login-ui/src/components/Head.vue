<template>
  <div id="box">
    <div id="headMenu" class="headMenu">
      <div id="headButton">
        <a href="" ><img src="@/../static/logo.jpg"/></a>
        <el-button type="text" label="首页"></el-button>
        <el-button type="text" label="电影"></el-button>
        <el-button type="text" label="热点"></el-button>
      </div>
      <div id="headSearch" class="headSearch">
        <el-input placeholder="快速查找电影、影院"
                  icon="search" v-model="searchMessage"
                  on-icon-click="search()" lable="搜索 ">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchMessage:''
      }
    },
    methods: {
      search(value){
        console.log(value);
      }
    }
  }

</script>

<style lang="less">
  .headMenu {
    .headSearch {
      float: right;
    }
  }

</style>
