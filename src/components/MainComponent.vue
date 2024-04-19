<template>
    <main class="container ">
            <div v-if="store.qString.params.query" >
                <MovieList  />
                <CardList title="Popular" :list="store.popular"/>
            </div>
            <CardList title="Popular" :list="store.popular" v-else/>
    </main>
</template>

<script>
import {store} from '../store';
import MovieList from './MovieList.vue';
import CardList from './CardList.vue';

    export default {
        name: 'MainComponent',
        components:{MovieList, CardList},
        
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