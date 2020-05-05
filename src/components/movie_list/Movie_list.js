import React, { Component } from 'react'
import MovieListItem from './Movie_list_item';
import axios from 'axios'


const API_KEY = '957c988676c0d274a6d1cc76dd5c8a93'
const URL_BASE = 'https://api.themoviedb.org/3/movie/popular?api_key='
const URL_TAIL = '&language=en-US&page=1'


// Get Popular +
// Get Upcoming
// Get TopRated


class Movie_list extends Component {

    state = {
        movies: [],
        base_url: 'http://image.tmdb.org/t/p/',
        poster_size: 'w342'
    }

    componentDidMount() {
        axios.get(URL_BASE + API_KEY + URL_TAIL)
            .then(response => {
                this.setState({ movies: response.data.results })
            });
    }

    render() {
        const movies = this.state.movies.map(movie => {
            return <MovieListItem
                key={movie.id}
                title={movie.title}
                releasedate={movie.release_date}
                vote={movie.vote_average}
                poster={movie.poster_path}
                base_url={this.state.base_url}
                poster_size={this.state.poster_size}
            />
        });
        return (
            <div className='flex flex-wrap justify-center mx-40'>
                {movies}
            </div>
        )
    }
}
export default Movie_list
