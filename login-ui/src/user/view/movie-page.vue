<template>
  <div>
    <div class="movieTags">
      <span style="float: left;font-size: 20px;width: 100%">分类</span>
      <div class="category">
        <div style="display: block">
          <el-tag v-for="tag in movieTags" :key="tag"
                  type=""
                  :closable="true"
                  :close-transition="false"
                  @close="closeTag(tag)"
                  v-show="movieTags != null || movieTags.length > 0"
                  style="margin:0px;">
            {{tag}}
          </el-tag>
        </div>
        <span>年代:</span>
        <ul>
          <li style="display: inline" v-for="time in timeList" @click="queryByTime(time)">{{time}}</li>
        </ul>
      </div>
    </div>

    <div class="movies">
      <span v-show="movieList == null || movieList.length == 0" style="color: gray; font-size: large">暂无电影数据</span>
      <div v-for="movie in movieList" class="movieItem">
        <img :src="movie.image" @click="jumpToMovieDetail(movie.id)" width="135px" height="202px"/>
        <span>{{movie.movieName}}</span>
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
        movieTags:[],
        timeTag:'',
        timeList:['全部',2010,2011,2012,2013,2014,2015,2016,2017],
        movieList:[],
        queryData:{
          releaseDate:''
        }
      }
    },
    methods: {
      query(param){
        if (param == '' || param == null){
          api.queryMovieList().then(res => {
            const {
              data,
              status,
              message
            } =res.data;
            if (status === '0000') {
              this.movieList=data;
              this.$message(message);
              console.log(data);
            } else {
              this.$message(message);
              console.log(data);
            }
          }).catch(error => {
            this.$message(error+'  GG');
          });
        } else {
          api.queryMovie(param).then(res => {
            const {
              data,
              status,
              message
            } =res.data;
            if (status === '0000') {
              this.movieList=data;
              this.$message(message);
              console.log(data);
            } else {
              this.$message(message);
              console.log(data);
            }
          }).catch(error => {
            this.$message(error+'  GG');
          });
        }

      },
      queryByTime(time){
        if (time =='全部') {
          return;
        }
        this.timeTag = time;
        this.movieTags = [];
        this.movieTags.push(this.timeTag);
        console.log(time);
        this.queryData.releaseDate=time;
        this.query(this.queryData);

      },
      jumpToMovieDetail(id){
      },
      closeTag(tag){
        this.movieTags.splice(this.movieTags.indexOf(tag), 1);
        this.query();
      }
    },
    mounted(){
      this.query();
    }
  }
</script>

<style lang="less">
  .movieTags {
    width: 100%;
    margin: 2em;
    display: inline-block;
    float:left;
    text-align: left;
    .category {
      margin-top: 10px;
      display: inline-block;
      margin-left: 2em;
        span {
          display: inline-block;
        }
        ul {
          display: inline-block;
          padding:0px;
        }
        li {
          display: inline;
          margin-left:2em;
        }

    }
  }
  .movies{
    float: left;
    display: inline-block;
    padding-top: 10px;
    margin-left: 2em;
    .movieItem {
      display: inline-block;
      float:left;
      width: 135px;
      height: 235px;
      margin-top: 35px;
      margin-left: 35px;
    }
  }

</style>
