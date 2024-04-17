<template>
    <div class="row m-0">
        <div class="col " v-for="item in store.movies" >
            <CardComponent :image="store.baseUrlImg + item.poster_path"/>
        </div>
        <div class="col " v-for="item in store.series" >
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

</style>