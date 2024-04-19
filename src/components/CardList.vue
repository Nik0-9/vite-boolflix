<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="myflex">
            <button class="leftbtn">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="myrow" v-for="(card, index) in list" :key="card.id">
                <PopComponent :item="card"/>
            </div>
            <button class="rightbtn">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
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

h2{
    color: $titlecolor;
}

.myrow{
    width: 250px;
    flex-shrink: 0;
}
.myflex{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}

.leftbtn{
position: absolute;
z-index: 10;
height: 375px;
left: 50px;
}
.rightbtn{
position: absolute;
z-index: 10;
height: 375px;
right: 50px;
}

.leftbtn, .rightbtn{
    background-color: transparent;
    border: none;
    i{
        color: $titlecolor;
        font-size: 4rem;
    }
}
</style>