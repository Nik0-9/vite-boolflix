<template>
    <div v-if="!this.store.qString.params.query">
        <div v-for="(cover, index) in store.popular" :key="index" class="image-container">
            <img :src="store.baseUrlImg + cover.backdrop_path" class="jumbo-image"
                :class="{ 'visible': count === index, 'hidden': count !== index }">
        </div>
    </div>
        <div v-else>
            <div v-for="(cover, index) in store.movies" :key="index" class="image-container">
                <img v-if="cover.backdrop_path" :src="store.baseUrlImg + cover.backdrop_path" class="jumbo-image"
                :class="{ 'visible': count === index, 'hidden': count !== index }" >
                <img v-else :src="store.baseUrlImg + cover.poster_path" class="jumbo-image"
                :class="{ 'visible': count === index, 'hidden': count !== index }">
            </div>
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
        setInterval(() => {
            this.count = (this.count + 1) % this.store.popular.length;
        }, 5000)
    }
}
</script>

<style lang="scss" scoped>
.image-container {
    position: absolute;
    width: 100%;
    height: 600px;
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s;
}

.visible {
    opacity: 1;
}

.hidden {
    opacity: 0;
    pointer-events: none;
}
</style>
