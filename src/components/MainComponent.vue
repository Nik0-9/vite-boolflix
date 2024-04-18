<template>
    <main>
        <div class="my-container">
            <div v-if="store.qString.params.query">
                <MovieList  />
            </div>
            <h2 v-else>Fai la tua ricerca</h2>
        </div>
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
    margin: 0 auto;
}

</style>