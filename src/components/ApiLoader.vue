<template>
    <div class="loader d-flex justify-content-center align-items-center">
    </div>
</template>


<script>
import { store } from '../store';
    export default {
        name: 'ApiLoader',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    .loader{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $backgroundcolor;
        z-index: 2000;
        animation: fade 2s ease forwards 1s;
        
        @keyframes fade {
            from { opacity: 1; } 
            to { opacity: 0; } 
        }
        &::after{
           content: " "; 
           width: 80px;
           height: 80px;
           border: 15px solid $navbarcolor;
           border-top-color: $titlecolor;
           border-radius: 50%;
           animation: loading 0.75s ease infinite;
            
        }
        @keyframes loading {
            from { transform: rotate(0turn)}
            to{ transform: rotate(1turn)}
        }
    }
    
</style>