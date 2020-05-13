import axios from 'axios'
// import R from './reducer'


export const FILTER_BY_VALUE = 'FILTER_BY_VALUE'
export const INIT_MOVIE_ID = 'INIT_MOVIE_ID'
export const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'
export const SET_TOP_RATED_MOVIES = 'SET_TOP_RATED_MOVIES'
export const SET_UPCOMMING_MOVIES = 'SET_UPCOMMING_MOVIES'

export const SET_SEARCHED_MOVIES = 'SET_SEARCHED_MOVIES'
export const SET_SEARCHED_FILM = 'SET_SEARCHED_FILM'

export const SET_SIMILAR_MOVIES = 'SET_SIMILAR_MOVIES'

export const GO_BACK = 'GO_BACK'


const URL_BASE = 'https://api.themoviedb.org/3/movie/'
const POPULAR = 'popular'
const TOP_RATED = 'top_rated'
const UPCOMING = 'upcoming'
const SIMILAR = '/similar'
const API_KEY = '?api_key=957c988676c0d274a6d1cc76dd5c8a93'
const URL_TAIL = '&language=en-US&page=1'


const SEARCH_BASE = 'https://api.themoviedb.org/3/search/movie'
const LANG_Q = '&language=en-US&query='
const SEARCH_TAIL = '&page=1&include_adult=true'


const LANG = "&language=en-US"


export const setPopularMovies = (movies) => {
    return {
        type: SET_POPULAR_MOVIES,
        movies: movies
    }
}

export const initPopularMovies = () => {
    return dispatch => {
        axios.get(URL_BASE + POPULAR + API_KEY + URL_TAIL)
            .then(response => {
                dispatch(setPopularMovies(response.data.results));
            })
            .catch(error =>{
                console.log('An error while getting data!')
            });
    }
}




export const setTopRatedMovies = (movies) => {
    return {
        type: SET_TOP_RATED_MOVIES,
        movies: movies
    }
}

export const initTopRatedMovies = () => {
    return dispatch => {
        axios.get(URL_BASE + TOP_RATED + API_KEY + URL_TAIL)
            .then(response => {
                dispatch(setTopRatedMovies(response.data.results));
            })
            .catch(error => {
                console.log('An error while getting data!')
            });
    }
}


export const setUpcommingMovies = (movies) => {
    return {
        type: SET_UPCOMMING_MOVIES,
        movies: movies
    }
}

export const initUpcommingMovies = () => {
    return dispatch => {
        axios.get(URL_BASE + UPCOMING + API_KEY + URL_TAIL)
        .then(response =>{
            dispatch(setUpcommingMovies(response.data.results));
        })
        .catch(error => {
            console.log('An error while getting data!')
        });
    }
}

export const setSearchedMovies = (movies) => {
    return {
        type: SET_SEARCHED_MOVIES,
        movies: movies
    }
}


export const initSearchedMovies = (query) => {
    let SEARCH_QUERY = query
    return dispatch => {
        axios.get(SEARCH_BASE + API_KEY + LANG_Q + SEARCH_QUERY + SEARCH_TAIL)
            .then(response => {
                dispatch(setSearchedMovies(response.data.results))
            })
            .catch(error => {
                console.log('An error while getting data!')
            });
    }
}

export const setMovieById = (film) => {
    return {
        type: SET_SEARCHED_FILM,
        film: film
    }
}



export const initMovieById = (id) => {
    let MOVIE_ID = id
    return dispatch => {
        axios.get(URL_BASE + MOVIE_ID + API_KEY + LANG)
        .then(response => {
            dispatch(setMovieById(response.data))
        })
        .catch(error => {
            console.log('An error while getting FILM data!')
        });
    }
}

export const setSimilarMovies = (movies) => {
    return {
        type: SET_SIMILAR_MOVIES,
        sMovies: movies
    }
}

export const initSimilarMovies = (id) => {
    return dispatch => {
        axios.get(URL_BASE + id + SIMILAR + API_KEY + URL_TAIL )
        .then(response => {
            dispatch(setSimilarMovies(response.data.results))
        })
        .catch(error => {
            console.log('An error while getting SimilarMovies!')
        });
    }
}





