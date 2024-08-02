<template>
    <header class="d-flex justify-content-between align-items-center p-2">
        <div>
            <h1 class="text-uppercase">
                <a href="http://localhost:5173/">
                    boolflix
                </a>
            </h1>
        </div>
        <div class="input-group w-25">
            <input type="text" class="form-control w-50" placeholder="Cerca il titolo di un film o serie-TV" @keyup.enter="$emit('searchMovie') " v-model.trim="store.movieFilter">
            <button class="btn btn-outline-danger" @click="$emit('searchMovie')">Cerca</button>
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
        position: fixed;
        height: 90px;
        width: 100%;
        z-index: 500;
        background-color: $navbarcolor;
        h1{
            color: $titlecolor;
        }
        a{
            text-decoration: none;
            color: $titlecolor;
        }
    }
</style>