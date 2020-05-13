import * as actionTypes from './actions'

const initialState = {
    search: '',
    movies: null,
    selectedMovieId: null,
    filmDetails: null,
    similarMovies: null,

    base_url: 'http://image.tmdb.org/t/p/',
    poster_size: 'w342',
    poster_size_L: 'w500'
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.FILTER_BY_VALUE:
            return {
                ...state,
                search: action.text,
            };
        case actionTypes.INIT_MOVIE_ID:
            return {
                ...state,
                selectedMovieId: action.movie_id
            };
        case actionTypes.SET_SEARCHED_FILM:
            return{
                ...state,
                filmDetails: action.film
            }

        case actionTypes.SET_POPULAR_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies,
                filmDetails: null,
                similarMovies: null,
            };
        case actionTypes.SET_TOP_RATED_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies,
                filmDetails: null,
                similarMovies: null,
            };
        case actionTypes.SET_UPCOMMING_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies,
                filmDetails: null,
                similarMovies: null,
            };
        case actionTypes.SET_SEARCHED_MOVIES:
            return {
                ...state,
                movies: action.movies,
                filmDetails: null,
            }
        case actionTypes.GO_BACK: 
            return{
                ...state,
                filmDetails: null
            } 
        case actionTypes.SET_SIMILAR_MOVIES:
            return {
                ...state,
                similarMovies: action.sMovies
            }
        default:
            return state;
        }
}
export default reducer