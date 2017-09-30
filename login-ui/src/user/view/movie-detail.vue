<template>
  <div style="display: block">
    <div class="movieInfo">
      <h1>{{movieInfo.movieName}}</h1>
      <div class="post">
        <img :src="movieInfo.image" @click="dialogVisible = true"/>
        <div style="margin-top:10px;">
        <button @click="watchMovie()" size="small">立即观看</button>
        <button @click="showRate = true" size="small">看过评分</button>
        <div v-show="showRate" style="margin-top:5px">
          <el-rate :allow-half="true" v-model="Rate"></el-rate>
        </div>
        </div>
      </div>
      <div class="info" style="color: #fff">
        <span>导演：</span><br/>
        <span>编剧：</span><br/>
        <span>主演：</span><br/>
        <span>上映时间：{{movieInfo.releaseDate}}</span><br/>
        <span>类型：</span><br/>
        <span>制片：</span><br/>
        <span>语言：</span><br/>
        <span>片长：</span>
      </div>

    </div>
    <div style="background-color: #fff; margin-top:30px; padding:10px; display: inline-block; width:100%">
      <h3>用户短评</h3>
      <div class="textarea">
        <el-input type="textarea" :rows="5"
                  placeholder="请输入评价..."
                  v-model="textarea"
                  :autosize="{minRows:2,maxRows:8}">
        </el-input>
        <el-button @click="submitComment()">发表</el-button>
        <el-button @click="resetComment()">清空</el-button>
      </div>
      <div class="commentList">
        <span v-show="movieComments == null || movieComments.length == 0" style="color:gray">该电影还没有用户评论，占楼的赶紧...</span>
        <div v-for="(item,index) in movieComments" :key="index"
             style="padding:10px;border-top:solid peachpuff 1px; height: 60px">
          <span style="color: palevioletred; width: 100%;">{{item.userName}}:</span><br/>
          <span style="color: #000;width: 100%;margin-left: 2em;">{{item.comment}}</span>
          <div style="display: inline-block;float:right;" @click="vote(item.id)">
            <img src="@/../static/vote.png"  style="width:20px; height:20px;" />
            <span style="float: right;font-size: small"> （{{item.vote}}）</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <el-dialog :visible="this.dialogVisible" :modal="false" :show-close="false">
        <img :src=this.movieInfo.image @click="closeDialog()"/>
      </el-dialog>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import userApi from '@/user/api'
  const api = require('@/api/index.js')(axios);
  export default {

    data() {
      return {
        dialogVisible: false,
        movieInfo:[],
        movieComments: [],
        textarea:'',
        showRate: false,
        hasVoted: false,
        Rate:null,
        movie:{
          id:'',
          movieName:'',
          price:0,
          releaseTime:'',
          image:''
        }

      }
    },
    methods: {
      query(id){
        api.queryMovieByID(id).then(res => {
          const {
            data,
            status,
            message
          } = res.data;
          if (status === '0000') {
            this.movieInfo = data[0];
            this.movieComments = data[0].commentList;
            console.log(data);
            this.$message(message);
          } else {
            console.log(data);
            console.log("WRONG");
          }
        }).catch(
          error => {
            this.$message(error+' GG');
          }
        )
      },
      getMovieInfo(){
        if (this.movieInfo.length >0 ){

        }
      },
      submitComment(){
        let user = userApi.getUser();
        console.log(user);
        if (user == null) {
          this.$message('请先登录再发表评论');
          return null;
        }
        else {
          let comment = this.setComment(user);
          this.movieComments.push(comment);
          this.textarea = '';
          api.addComment(comment).then(res => {
            const {data,message,status} = res.data;
            if( status != '0000'){
              this.$message(message);
            }
          }).catch(error => {
            Message.error(error);
          });
        }
      },
      setComment(user){
        let comment = {};
        comment.userName = user.name;
        comment.userID = user.id;
        comment.movieID= this.movieInfo.id;
        comment.vote = 0;
        comment.comment = this.textarea;
        console.log(comment);
        return comment;
      },
      resetComment(){
        this.textarea = '';
      },
      closeDialog(){
        this.dialogVisible = false;
      },
      vote(id){
        if (this.hasVoted){
          return;
        }
        let comment;
        for (comment of this.movieComments){
         if (id === comment.id) {
           comment.vote++;
         }
       }
      }
    },
    mounted(){
      let query = this.$route.query;
      if (query && query.id >0) {
        this.movie.id = query.id;
        this.query(query.id);
      }
    }
  }
</script>
<style lang="less">
  .movieInfo {
    padding-left:10px;
    margin-left:250px;
    margin-top: 30px;
    padding-bottom: 30px;
    float: left;
    display: inline-block;
    width: 100%;
    h1{
      text-align: left;
      display:block;
      width:100%;
      color: #fff;
    }
    .post {
      float: left;
      img {
        width:135px;
        height: 202px;
      }

    }
    .info {
      padding-left: 20px;
       max-width: 333px;
       float: left;
      text-align: left;

     }
    .introduce{
      display: inline-block;
      width:30%;
      float: left;
      margin-left:80px;
      h2{
        text-align:left;
        display: inline-block;
      }
      p{
        font: Arial;
      }
    }
  }
  .textarea {
    display: inline-block;
    width:60%;
    margin-top: 20px;
    text-align: center;
    .el-button {
     margin-top: 10px;
    }
  }
  .commentList{
    text-align: left;
    display: inline-block;
    background-color: floralwhite;
    margin-top: 30px;
    width:60%;
  }
  .dialog {
    .el-dialog {
      width: 100%;
      height:100%;
      img {
        width:100%;
        height: 100%;
      }
    }
  }
</style>
