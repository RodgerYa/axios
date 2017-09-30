<template>
  <div id="box">
    <div id="headMenu" class="headMenu">
      <div id="headButton" class="headButton">
        <img src="@/../static/logo.jpg" @click="jumpToMovieList"/>
        <el-button type="text" @click="jumpToMovieList" size="large">首页</el-button>
        <el-button type="text" @click="jumpToMoviePage" size="large">电影</el-button>
        <el-button type="text" @click="jumpToMovieNews" size="large">影讯</el-button>
      </div>
    <div class="headSearch" @keyup.enter="query()">
      <el-input placeholder="快速查找电影、影院"
                icon="search" v-model="searchMessage"
                @click="query()">
      </el-input>
    </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import userApi from '@/user/api'
  export default {
    data() {
      return {
        searchMessage:''
      }
    },
    methods: {
      query(){
        console.log(this.searchMessage);
        this.searchMessage = '';
      },
      //电影
      jumpToMoviePage(){

      },
      //影讯
      jumpToMovieNews(){

      },
      //首页
      jumpToMovieList(){
        this.$router.push({path:'/movie/movie-list'});
      },
      userIcon(){

      }
    },
    mounted(){

    }
  }

</script>

<style lang="less">
  .headMenu {
    display: inline-block;
    background-color: floralwhite;
    top:0;
    width: 100%;
    height: 80px;
    .logo {
      margin-top: 10px;
      margin-left: 60px;
      margin-right: 10px;
      float:left;
    }
    .headButton {
      margin-left: 10px;
      position: relative;
      top: -10%;
      float:left;
      img {
        height: 55px;
        width: 55px;
      }
    }
    .headSearch {
      width: 35%;
      height: 100%;
      display: inline-block;
      margin-left: 5em;
      .el-input {
        margin-top: 5px;
        width:100%;
      }
    }

  }
</style>
