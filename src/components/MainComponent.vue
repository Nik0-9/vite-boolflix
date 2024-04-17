<template>
    <main class="container">
        <MovieList v-if="store.qString.params.query"/>
        <h2 v-else>Fai la tua ricerca</h2>
    </main>
</template>

<script>
import {store} from '../store';
import MovieList from './MovieList.vue';
    export default {
        name: 'MainComponent',
        components:{MovieList},
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>