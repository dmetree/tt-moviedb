import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Slider from "react-slick";



import * as actionTypes from '../../store/actions'
import MovieListItem from './../movie_list/Movie_list_item'

class SimilarMovies extends Component {

    movieClickedHandler = (id) => {
        this.props.onMovieIdClick(id)
        this.props.onGoToMovie(id)
        this.props.onGetSimilar(id)
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        let similarMovieList = <div>Loading movies</div>

        if (this.props.similarMovies) {
            similarMovieList = this.props.similarMovies.map(movie => {
                return <MovieListItem
                    key={movie.id}
                    title={movie.title}
                    releasedate={movie.release_date}
                    vote={movie.vote_average}
                    poster={movie.poster_path}
                    base_url={this.props.base_url}
                    poster_size={this.props.poster_size}
                    clicked={() => this.movieClickedHandler(movie.id)}
                />
            });
        }

        return (
            <div className="flex flex-wrap justify-center mx-8 md:mx-20 lg:mx-40">
                {similarMovieList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        similarMovies: state.similarMovies,
        base_url: state.base_url,
        poster_size: state.poster_size,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieIdClick: (id) => dispatch({ type: actionTypes.INIT_MOVIE_ID, movie_id: id }),
        onGoToMovie: (id) => dispatch(actionTypes.initMovieById(id)),
        onGetSimilar: (id) => dispatch(actionTypes.initSimilarMovies(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovies)
