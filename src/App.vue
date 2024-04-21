<template>
  <div v-if="!store.loading">
    <HeaderComponent @searchMovie="setMovieFilter" />
    <MainComponent />
  </div>
  <ApiLoader v-else />
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ApiLoader from './components/ApiLoader.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    ApiLoader
  },
  data() {
    return {
      store
    }
  },
  methods: {
    setMovieFilter() {
      if (this.store.movieFilter) {
        this.store.qString.params.query = this.store.movieFilter;
        Promise.all([this.getMovies(), this.getSeries()]).then((res) => {
          this.store.movies = res[0].data.results;
          this.store.series = res[1].data.results;
        }).catch((error) => {
          console.log(error);
          this.store.error.messages = error.message;
        }).finally(() => {
          console.log('finally');
          this.loading();
          this.store.loading = true;
        })
        this.getMovies();
        this.getSeries();
      }
      else {
        this.store.qString.params.query = ''
      }
    },

    getPopular(){
      Promise.all([this.getPopularMovie(), this.getPopularTv()]).then((res) => {
        this.store.popular = res[0].data.results;
        this.store.popularTv = res[1].data.results;
      }).catch((error) => {
        console.log(error);
        this.store.error.messages = error.message;
      }).finally(() => {
        console.log('finally');
        this.loading();
        this.store.loading = true;
      })
      this.getPopularMovie();
      this.getPopularTv();
    },

    loading() {
      setTimeout(() => {
        this.store.loading = false;
      }, 2000);
    },

    getMovies() {
      return axios.get(this.store.baseUrl + this.store.endPoint.movie, this.store.qString);
    },

    getSeries() {
      return axios.get(this.store.baseUrl + this.store.endPoint.tv, this.store.qString)
    },

    getPopularMovie() {
      return axios.get(this.store.baseUrl + this.store.endPoint.popular, this.store.qString)
    },

    getPopularTv() {
      return axios.get(this.store.baseUrl + this.store.endPoint.popularTv, this.store.qString)
    }
  },
  created(){
    this.getPopular()
  }
}

</script>

<style lang="scss" scoped></style>