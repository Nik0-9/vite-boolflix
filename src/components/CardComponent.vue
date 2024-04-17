<template>
    <div class=" flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="image" :alt="title">
            </div>
            <div class="flip-card-back">
                <div>{{ title }}</div>
                <div>{{ originalTitle }}</div>
                <div>{{ vote }}</div>
                <div>{{ language }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'originalTitle', 'language', 'vote', 'image']
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.flip-card {
    background-color: transparent;
    width: 344px;
    height: 515px;
    perspective: 1000px;
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
    div{
        margin: 10px 0;
    }
}
</style>