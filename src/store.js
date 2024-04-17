import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    qString: {
        params:{
            api_key: '8314eb4e384ebe27d5bd475eacad9b19',
            query:'',
        }
    },
    baseUrlImg: 'https://image.tmdb.org/t/p/w342',
    movies: [],
    series: [],
    movieFilter: ''
})