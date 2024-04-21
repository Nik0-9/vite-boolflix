<template>
    <div v-for="(cover, index) in this.store.popular" :key="index">
        <img :src="store.baseUrlImg + cover.backdrop_path" class="jumbo-image "
            :class=" [count === index ? 'd-block' : 'd-none']">
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'JumboComponent',

    data() {
        return {
            store,
            count: 0
        }
    },
    created() {
        console.log('popular', this.store.popular);
        setInterval(() => {
            if (this.count < store.popular.length - 1) {
                this.count++;
            } else {
                this.count = 0;
            }
            console.log(this.count);
        }, 5000)
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}
</style>
