<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="(card, index) in list" :key="card.id">
                <PopComponent :item="card"/>
            </div>
        </div>

    </div>
</template>

<script>
import PopComponent from './PopComponent.vue';

    export default {
        name: 'CardList',
        components:{PopComponent},
        props:{
            title: String,
            list: Array
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h2{
    color: $titlecolor;
}

</style>