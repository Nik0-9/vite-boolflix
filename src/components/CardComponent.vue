<template>
    <div>
        <img :src="image" :alt="title">
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:[ 'title', 'originalTitle', 'language', 'vote', 'image']
    }
</script>

<style lang="scss" scoped>


</style>