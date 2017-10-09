<template>
  <div id="box">
    <div class="CarouselDiv">
      <el-carousel :interval="5000" arrow="always" height="450px" type="card">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img v-bind:src="item.src" width="100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="movieList">
      <h4>热映电影</h4>
      <span v-if="page.movieList.length === 0" style="color: gray; font-size: large">暂无电影数据</span>
      <div class="movieItem" v-for="(item, index) in page.movieList" :key="index">
        <img :src="item.image" @click="jumpToMovieDetail(item.id)" width="135px" height="202px"/>
        <span>{{item.movieName}}</span>
      </div>
    </div>
    <y-footer></y-footer>
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
          releaseTime:'',
          image:'',
          id:''
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
//            this.initCarouselList(this.page.movieList);
          } else {
            this.$message(message);
            console.log(data);
            console.log('XXXX');
          }
        }).catch(error => {
          this.$message(error+'  GG');
        });
      },
      SearchMovie(param){
        let queryData = {};
        queryData.movieName = param;
        api.queryMovie(queryData).then(res => {
          const {
            data,
            status,
            message
          } =res.data;
          if (status === '0000') {
            this.page.movieList=data;
            this.$message(message)
            console.log(this.page.movieList);
//            this.initCarouselList(this.page.movieList);
          } else {
            this.$message(message);
            console.log(data);
            console.log('XXXX');
          }
        }).catch(error => {
          this.$message(error+'  GG');
        });
      },
      initCarouselList(param) {
        let data = param;
        data.sort((a,b) => {
          return a.releaseTime>b.releaseTime?1:-1;
        });
        for (let i=0;i<5;i++){
          this.carouselList.push(data[i]);
        }
        console.log('endfor........');
        console.log(this.carouselList);
      },
      //电影详细
      jumpToMovieDetail(id){
        this.$router.push({path:'/movie/movie-detail',query:{'id':id}});
      },
    },
    mounted(){
        this.query();
//      this.initCarouselList(this.page.movieList);
    }
  }
</script>

<style lang="less">

  .CarouselDiv {
    width: 100%;
    padding: 0px;
    margin: 0px;
    float: left;
    display: inline-block;
  }
  .movieList {
    background-color: floralwhite;
    display: inline-block;
    border-radius: 8px;
    width:100%;
    padding-top: 10px;
  }
  .movieItem {
    display: inline-block;
    float:left;
    width: 135px;
    height: 235px;
    margin-top: 35px;
    margin-left: 35px;
  }
  h4 {
    float: left;
    margin-left: 2em;
    font-size: 25px;
    color: deepskyblue;
    margin-right: 80%;
  }
  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n+1) {
  }
</style>
