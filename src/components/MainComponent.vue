<template>
    <main class="container">
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