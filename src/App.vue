<template>
  <HeaderComponent @searchMovie="setMovieFilter" />
  <MainComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    setMovieFilter() {
      if (this.store.movieFilter) {
        this.store.qString.params.query = this.store.movieFilter
      } else {
        this.store.qString.params.query = ''
      }
      this.getMovies();
      this.getSeries();
    },
    getMovies() {
      axios.get(this.store.baseUrl + this.store.endPoint.movie, this.store.qString).then((res) => {
        console.log(res.data.results);
        this.store.movies = res.data.results;
      });
    },
    getSeries() {
      axios.get(this.store.baseUrl + this.store.endPoint.tv, this.store.qString).then((res) => {
        console.log(res.data.results);
        this.store.series = res.data.results;
      });
    },
    getPopular(){
      axios.get(this.store.baseUrl + this.store.endPoint.popular, this.store.qString).then((res)=>{
        this.store.popular = res.data.results;
        console.log(res.data.results);
      });
    },
    getPopularTv(){
      axios.get(this.store.baseUrl + this.store.endPoint.popularTv, this.store.qString).then((res)=>{
        this.store.popularTv = res.data.results;
        console.log(res.data.results);
      });
    }
  },
  created() {
    this.getPopular();
    this.getPopularTv();

  }
}
</script>

<style lang="scss" scoped>
</style>