<template>
    <div class=" flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="image" :alt="title">
            </div>
            <div class="flip-card-back">
                <div>{{ title }}</div>
                <div>{{ originalTitle }}</div>
                <div class="flag">
                    <img :src="`/img/${language}.png`" :alt="language">
                </div>
                <div class="stars">
                    <i :class="{ 'fa-solid': n <= voteStar, 'fa-regular': n > voteStar }" class="fa-star" v-for="n in 5"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['title', 'originalTitle', 'language', 'vote', 'image'],
    data() {
        return {
            store,
            flags: [
                'it',
                'jp',
                'ko',
                'es',
                'en',
                'us',
                'fr'
            ],
        }
    },
    computed: {
        voteStar() {
            return Math.ceil(this.vote / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

img {
    width: 250px;
}

.flag {
    img {
        width: 40px;
    }
}

.flip-card {
    background-color: transparent;
    width: 250px;
    height: 380px;
    perspective: 1000px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: transparent;
}

.flip-card-back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: $navbarcolor;
    color: white;
    transform: rotateY(180deg);

    div {
        margin: 10px 0;
        padding: 10px;
    }
}
</style>