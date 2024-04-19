import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popular: 'movie/popular'
    },
    qString: {
        params:{
            api_key: '8314eb4e384ebe27d5bd475eacad9b19',
            query:'',
        }
    },
    baseUrlImg: 'https://image.tmdb.org/t/p/original',
    movies: [],
    series: [],
    popular: [],
    movieFilter: '',
});
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'