<template>
    <HeaderComponent @searchMovie="setMovieFilter"/>
    <MainComponent />
</template>

<script>
import axios from 'axios';
import {store} from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
      setMovieFilter(){
        if(this.store.movieFilter){
          this.qString.params.query = this.store.movieFilter
        }else{
          this.store.movieFilter = ''
        }
      },
      getMovies(){
        axios.get(this.store.baseUrl + this.store.endPoint.movie, this.store.qString).then((res)=>{
          console.log(res.data.results);
          this.store.movies = res.data.results;
        });
      },
      getSeries(){
        axios.get(this.store.baseUrl + this.store.endPoint.tv, this.store.qString).then((res)=>{
          console.log(res.data.results);
          this.store.series = res.data.results;

        });
    }
  },
    created(){
      this.getMovies();
      this.getSeries();

    }
  }
</script>

<style lang="scss" scoped>

</style>