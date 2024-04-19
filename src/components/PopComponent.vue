<template>
    <div class=" flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="store.baseUrlImg + item.poster_path" :alt="item.title" @error="imgNotFound">
            </div>
            <div class="flip-card-back">
                <div>{{ item.title }}</div>
                <div>{{ item.originalTitle }}</div>
                <div class="flag">
                    <img :src="`/img/${item.original_language}.png`" :alt="item.original_language" @error="flagNotFound" />
                </div>
                <div class="stars">
                    <i :class="{ 'fa-solid': n <= voteStar, 'fa-regular': n > voteStar }" class="fa-star" v-for="n in 5"></i>
                </div>
                <h6>{{ item.overview }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'PopComponent',
    props: {
        item: Object
    },
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
    methods:{
        imgNotFound(event){
            event.target.src="/img/not-found.jpg";
        },
        flagNotFound(event){
            event.target.src="/img/flag-not-found.png";
        }
    },  
    computed: {
        voteStar() {
            return Math.ceil(this.item.vote_average / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

::-webkit-scrollbar {
    width: 8px;
  }
    
  ::-webkit-scrollbar-track {
    background: $navbarcolor;
  }
    
  ::-webkit-scrollbar-thumb {
    background: $textcolor2;
    border-radius: 5px;
    box-shadow: -3px -3px 10px inset $textcolor2;
  } 
  

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
    overflow-y: auto;
    overflow-x: hidden;
    div {
        margin: 5px 0;
        padding: 10px;
    }
    i{
        color: $textcolor2;
    }
    h6{
        overflow-y: scroll;
    }
}
</style>