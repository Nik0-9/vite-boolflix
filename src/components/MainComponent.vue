<template>
    <main>
        <JumboComponent  />

        <div class="container jumbomargin">
            <div v-if="!store.loading">
                <div v-if="store.qString.params.query">
                    <CardList title="Film" :list="store.movies" />
                    <CardList title="Tv Series" :list="store.series" />
                    <CardList title="Popular" :list="store.popular" />
                    <CardList title="Popular TV Series" :list="store.popularTv" />
                </div>
                <div v-else>
                    <CardList title="Popular" :list="store.popular" />
                    <CardList title="Popular TV Series" :list="store.popularTv" />
                </div>
            </div>
            <div v-else>
                <ApiLoader />
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store';
import ApiLoader from './ApiLoader.vue';
import CardList from './CardList.vue';
import JumboComponent from './JumboComponent.vue';

export default {
    name: 'MainComponent',
    components: { CardList, ApiLoader,JumboComponent },

    data() {
        return {
            store
        }
    },
    created(){
        console.log('main');
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

div{
    margin-bottom: 30px;
}

.jumbomargin{
    margin-top: 620px;
}

</style>