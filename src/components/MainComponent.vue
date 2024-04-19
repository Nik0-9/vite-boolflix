<template>
    <main>
        <div class="container">
            <div class="m-3" v-if="store.qString.params.query">
                <CardList title="Film" :list="store.movies"/>
                <CardList title="Tv Series" :list="store.series"/>
                <CardList title="Popular" :list="store.popular"/>
                <CardList title="Popular TV Series" :list="store.popularTv"/>
            </div>
            <div class="m-3" v-else>
                <CardList title="Popular" :list="store.popular"/>
                <CardList title="Popular TV Series" :list="store.popularTv"/>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store';
import CardList from './CardList.vue';

export default {
    name: 'MainComponent',
    components: {CardList },

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

div {
    margin-top: 20px;
}


</style>