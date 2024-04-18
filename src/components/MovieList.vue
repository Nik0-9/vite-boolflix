<template>
        <h2 v-if="store.qString.params.query">film</h2>
        <div  v-for="item in store.movies">
            <CardComponent :image="store.baseUrlImg + item.poster_path" :title="item.title"
                :originalTitle="item.original_title" :language="item.original_language" :vote="item.vote_average" :overview="item.overview"/>
        </div>
        <h2 v-if="store.qString.params.query">serie tv</h2>
        <div  v-for="item in store.series">
            <CardComponent :image="store.baseUrlImg + item.poster_path" :title="item.name"
                :originalTitle="item.original_name" :language="item.original_language" :vote="item.vote_average" :overview="item.overview"/>
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

h2 {
    text-transform: uppercase;
    color: $titlecolor;
    margin: 20px 0;
}
div{
    width: 250px;
    display: inline-block;

}

</style>