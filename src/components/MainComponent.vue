<template>
    <main>
        <div class="container">
            <div class="mb-3" v-if="store.qString.params.query">
                <MovieList />
                <CardList title="Popular" :list="store.popular" class="mb-3" />
                <CardList title="Popular TV Series" :list="store.popularTv" class="mb-3" />

            </div>
            <div v-else>
                <CardList title="Popular" :list="store.popular" class="mb-3" />
                <CardList title="Popular TV Series" :list="store.popularTv" class="mb-3" />

            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store';
import MovieList from './MovieList.vue';
import CardList from './CardList.vue';

export default {
    name: 'MainComponent',
    components: { MovieList, CardList },

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    width: 100%;
    overflow-y: auto;
    height: calc(100vh - 90px);
    position: relative;
    top: 90px;
}


</style>