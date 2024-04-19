<template>
        <h2 v-if="store.qString.params.query">film</h2>
        <div class="myflex">
                <div class="myrow" v-for="item in store.movies">
                <CardComponent  :image="store.baseUrlImg + item.poster_path" :title="item.title"
                    :originalTitle="item.original_title" :language="item.original_language" :vote="item.vote_average" :overview="item.overview"/>
            </div>
        </div >
        <h2 v-if="store.qString.params.query">serie tv</h2>
        <div class="myflex">
            <div class="myrow" v-for="item in store.series">
                <CardComponent  :image="store.baseUrlImg + item.poster_path" :title="item.name"
                    :originalTitle="item.original_name" :language="item.original_language" :vote="item.vote_average" :overview="item.overview"/>
            </div>
        </div>
</template>

<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'MovieList',
    components: { CardComponent },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

::-webkit-scrollbar {
    width: 8px;
  }
    
  ::-webkit-scrollbar-track {
    background: $navbarcolor;
  }
    
  ::-webkit-scrollbar-thumb {
    background: $titlecolor;
    border-radius: 5px;
    box-shadow: -3px -3px 10px inset $textcolor2;
  } 

h2 {
    text-transform: uppercase;
    color: $titlecolor;
    margin: 20px 0;
}

.myrow{
    width: 250px;
    flex-shrink: 0;
}
.myflex{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}

</style>