<template>
  <div id="box">
    <div id="headMenu" class="headMenu">
      <div id="headButton" class="headButton">
        <a href="" class="logo">
          <img src="@/../static/logo.jpg" height="45px" width="45px"/>
        </a>
        <!--<div id="headMain" style="background-color: red">-->
          <!--<a href="javascript:void(0)" style="color: #fff">首页</a>-->
        <!--</div>-->
        <!--<div id="headMovies" style="background-color: red">-->
          <!--<a href="javascript:void(0)" style="color: #fff">电影</a>-->
        <!--</div>-->
        <!--<div id="headNews" style="background-color: red">-->
          <!--<a href="javascript:void(0)" style="color: #fff">影讯</a>-->
        <!--</div>-->
        <el-button type="text" @click="" size="large">首页</el-button>
        <el-button type="text" @click="" size="large">电影</el-button>
        <el-button type="text" @click="" size="large">影讯</el-button>
      </div>
      <div id="headSearch" class="headSearch">
        <el-input placeholder="快速查找电影、影院"
                  icon="search" v-model="searchMessage"
                  @on-icon-click="query()" lable="搜索 ">
        </el-input>
      </div>
    </div>
    <div class="CarouselDiv" >
      <el-carousel :interval="5000" arrow="always" height="350px" type="card">
        <el-carousel-item v-for="item in carouselList" :key="item.id">
          <img v-bind:src="item.src" height="350px" width="default"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="movieList" class="movieList"
         v-for="item in page.movieList" :key="index">
      <div class="movieItems">
        <img :src="item.src" @click="jumpToMovieDetail(key)"/>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Message} from 'element-ui'
  const api = require('@/api/index.js')(axios)
  export default {
    data() {
      return {
        carouselList:[
          {id:1,src:'@/../static/zhizhu.jpg'},
          {id:2,src:'@/../static/bianxing.jpg'},
          {id:3,src:'@/../static/jiyidashi.jpg'},
          {id:4,src:'@/../static/kenan.jpg'},
          {id:5,src:'@/../static/dahuaxiyou.jpg'},
        ],
        page:{
          movieList:[]

        },
        searchMessage:'',
        searchForm:{

        }
      }
    },
    methods: {
      query(){
        api.queryMovieList().then(res => {
          const {
            data,
            status
          } =res;
          if (status === '0000') {
            this.page.movieList=data.data;
            this.$message(data.message)
            console.log(data);
          } else {
            this.$message(data.message);
            console.log(data);
          }
        }).catch(error => {
          this.$message(error+'  GG');
        });
      },
      jumpToMovieDetail(){

      }
    },
    mounted(){
      this.query();
    }
  }
</script>

<style lang="less">
  .headMenu {
    background-color: skyblue;
    width: 100%;
    height: 60px;
    .logo {
      margin-top: 10px;
      margin-left: 90px;
      margin-right: 10px;
      float:left;
    }
    .headButton {
      font-size: 40px;
      font: 黑体;
      margin-left: 10px;
      color: dodgerblue;
      float:left;
    }
    .headSearch {
      .el-input {
        margin-top: 11px;
        margin-right: 100px;
        float: right;
        width: 35%;
      }
    }
  }
  .CarouselDiv {
    width: 100%;
    padding: 0px;
    margin: 0px;
    float: left;
  }

  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n+1) {
  }
</style>
