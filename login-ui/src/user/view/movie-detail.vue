<template>
  <div id="box">
    <div>
      <img :src="movieInfo.image" width="135" height="202"/>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  const api = require('@/api/index.js')(axios);
  export default {
    data() {
      return {
        movieInfo:[],
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
