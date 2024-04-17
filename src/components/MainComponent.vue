<template>
    <main class="container">
        <h2>Fai la tua ricerca</h2>
        <MovieList />
    </main>
</template>

<script>
import MovieList from './MovieList.vue'
    export default {
        name: 'MainComponent',
        components:{MovieList}
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


</style>