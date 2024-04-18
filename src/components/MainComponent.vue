<template>
    <main class="container ">
            <div v-if="store.qString.params.query" class="m-auto">
                <MovieList  />
            </div>
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
main{
    width: 100%;
    padding-top: 90px;
}
.my-container{
    width: 90%;
}

</style>