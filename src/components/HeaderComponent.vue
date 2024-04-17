<template>
    <header class="d-flex justify-content-between align-items-center p-2">
        <div>
            <h1 class="text-uppercase">boolflix</h1>
        </div>
        <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="Cerca il titolo di un film o serie-TV" @keyup.enter="$emit('searchMovie') " v-model="store.movieFilter">
            <button class="btn btn-outline-danger" type="button" @click="$emit('searchMovie')">Cerca</button>
        </div>
    </header>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    header{
        background-color: $navbarcolor;
        h1{
            color: $titlecolor;
        }
    }
</style>