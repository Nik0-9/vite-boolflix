<template>
    <div class="row m-0">
        <h3 class="text-uppercase">serie tv</h3>
        <div class="col " v-for="item in store.series">
            <CardComponent :image="store.baseUrlImg + item.poster_path"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SeriesList'
    }
</script>

<style lang="scss" scoped>

</style>