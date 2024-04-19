<template>
    <div class="container">
        <h2 class="ms-5">{{ title }}</h2>
        <div class="d-flex">
            <button class="leftbtn" @click="scrollList(-750)">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="myflex" ref="list">
                <div class="myrow" v-for="(card, index) in list" :key="card.id">
                    <CardComponent :item="card" />
                </div>
            </div>
            <button class="rightbtn" @click="scrollList(750)">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    name: 'CardList',
    components: { CardComponent },
    props: {
        title: String,
        list: Array
    },
    methods: {
        scrollList(offset) {
            this.$refs.list.scrollBy({
                left: offset,
                behavior: 'smooth'
            });
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
    background: $titlecolor;
    border-radius: 5px;
    box-shadow: -3px -3px 10px inset $textcolor2;
}

h2 {
    color: $titlecolor;
}

.myrow {
    width: 250px;
    flex-shrink: 0;
}

.myflex {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
}

.leftbtn,
.rightbtn {
    background-color: transparent;
    border: none;

    i {
        color: $titlecolor;
        font-size: 4rem;
    }
}
</style>