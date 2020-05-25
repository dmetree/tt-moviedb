import React, { Component } from 'react'
import { connect } from 'react-redux'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import * as actionTypes from '../../store/actions'

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
            slidesToShow: 8,
            slidesToScroll: 7,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 4,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3
                    }
                }
            ]
        };

        let similarMovieList = <div>Loading movies</div>

        if (this.props.similarMovies) {
            similarMovieList = this.props.similarMovies.map(movie => {
                return <div
                    key={movie.id}
                    className="focus:outline-none outline-none">
                    <img
                        className=" h-auto w-full"
                        src={this.props.base_url + this.props.poster_size + movie.poster_path}
                        alt="poster"
                        onClick={() => this.movieClickedHandler(movie.id)} />

                </div>
                // title={movie.title}
                // releasedate={movie.release_date}
                // vote={movie.vote_average}
                // poster = { movie.poster_path }
                // base_url = { this.props.base_url }
                // poster_size = { this.props.poster_size }
                // clicked = {() => this.movieClickedHandler(movie.id)
                // }
            });
        }

        return (
            // <div className="flex flex-wrap justify-center mx-2 md:mx-20 lg:mx-40">
            //     {similarMovieList}
            // </div>
            <Slider {...settings}>

                {similarMovieList}

            </Slider>
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
