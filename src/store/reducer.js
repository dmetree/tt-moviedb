import * as actionTypes from './actions'

const initialState = {
    search: '',
    movies: null,
    selectedMoiveId: null,

    base_url: 'http://image.tmdb.org/t/p/',
    poster_size: 'w342',
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
                selectedMoiveId: action.movie_id
            };

        case actionTypes.SET_POPULAR_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies
            };
        case actionTypes.SET_TOP_RATED_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies
            };
        case actionTypes.SET_UPCOMMING_MOVIES:
            return {
                ...state,
                search: '',
                movies: action.movies
            };
        case actionTypes.SET_SEARCHED_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state;
        }
}
export default reducer