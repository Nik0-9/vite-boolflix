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
@use '../assets/styles/partials/variables' as *;
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
::-webkit-scrollbar {
    width: 15px;
  }
    
  ::-webkit-scrollbar-track {
    background: $navbarcolor;
    border-radius: 20px;
  }
    
  ::-webkit-scrollbar-thumb {
    height: 20px;
    background: $titlecolor;
    border-radius: 20px;
    box-shadow: -3px -3px 10px inset $backgroundcolor;
  } 
  
  ::-webkit-scrollbar-track:hover{
    background-color: var(--color-secondary);
  }

</style>