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
        <el-button type="text" @click="jumpToMovieList" size="large">首页</el-button>
        <el-button type="text" @click="jumpToMoviePage" size="large">电影</el-button>
        <el-button type="text" @click="jumpToMovieNews" size="large">影讯</el-button>
      </div>
      <div id="headSearch" class="headSearch">
        <el-input placeholder="快速查找电影、影院"
                  icon="search" v-model="searchMessage"
                  @on-icon-click="query()">
        </el-input>
      </div>
      <div id="user">

      </div>
    </div>
    <div class="CarouselDiv">
      <el-carousel :interval="5000" arrow="always" height="450px" type="card">
        <el-carousel-item v-for="item in carouselList" :key="item.id">
          <img v-bind:src="item.src" height="100%" width="100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="movie" :gutter="20">
      <div id="title">
        <span style="float: left; margin-left: 60px; font-size: large; color: deepskyblue">热映电影</span>
      </div>
      <div id="movieList" class="movieList">
        <span v-if="page.movieList.length === 0" style="color: gray; font-size: large">暂无电影数据</span>
        <el-row>
          <el-col v-for="(item, index) in page.movieList" class="movieItem" :key="index">
            <div>
              <div>
                <img :src="item.image" @click="jumpToMovieDetail(item.id)" width="135px" height="202px"/>
              </div>
              <div class="movieInfo">
                <span>{{item.movieName}}</span><br>
              </div>
            </div>
          </el-col>
        </el-row>
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
        movieInfo:{
          movieName: '',
          price:0,
          releaseTime:''
        },
        searchForm:{

        }
      }
    },
    methods: {
      query(){
        api.queryMovieList().then(res => {
          const {
            data,
            status,
            message
          } =res.data;
          if (status === '0000') {
            this.page.movieList=data;
            this.$message(message)
            console.log(this.page.movieList);
          } else {
            this.$message(message);
            console.log(data);
            console.log('XXXX');
          }
        }).catch(error => {
          this.$message(error+'  GG');
        });
      },
      //电影详细
      jumpToMovieDetail(id){
        this.$router.push({path:'/movie/movie-detail',query:{'id':id}});
      },
      //首页
      jumpToMoviePage(){

      },
      //影讯
      jumpToMovieNews(){

      },
      //查看列表
      jumpToMovieList(){

      }


    },
    mounted(){
      this.query();

    }
  }
</script>

<style lang="less">
  .headMenu {
    display: inline-block;
    background-color: skyblue;
    width: 100%;
    height: 60px;
    .logo {
      margin-top: 10px;
      margin-left: 60px;
      margin-right: 10px;
      float:left;
    }
    .headButton {
      font-size: 40px;
      font: 黑体;
      margin-left: 10px;
      color: #000;
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
    display: inline-block;
  }
  .movieList {
    display: inline-block;
    border-radius: 8px;
    margin-bottom: 100px;
    width:95%;
  }
  .movieItem {
    width: 135px;
    height: 202px;
    margin-top: 50px;
    margin-left: 50px;
  }

  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n+1) {
  }
</style>
