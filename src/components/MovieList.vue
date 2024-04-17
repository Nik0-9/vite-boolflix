<template>
    <div class="row m-0">
        <h2 v-if="store.qString.params.query">film</h2>
        <div class="col " v-for="item in store.movies" >
            <CardComponent :image="store.baseUrlImg + item.poster_path"/>
        </div>
        <h2 v-if="store.qString.params.query">serie tv</h2>
        <div class="col " v-for="item in store.series">
            <CardComponent :image="store.baseUrlImg + item.poster_path"/>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MovieList',
        components:{CardComponent},
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
h2{
    text-transform: uppercase;
    color: $titlecolor;
    margin: 20px 0;
}
</style>