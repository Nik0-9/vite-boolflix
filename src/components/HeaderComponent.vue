<template>
    <header class="d-flex justify-content-between align-items-center p-2">
        <div>
            <h1 class="text-uppercase">boolflix</h1>
        </div>
        <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="Cerca il titolo di un film o una serie-TV" >
            <button class="btn btn-outline-danger" type="button">Cerca</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
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