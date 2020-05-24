import React, { Component } from 'react'
import { connect } from 'react-redux'

import SimilarMovies from './../similar_movies/SimilarMovies'

import * as actionTypes from '../../store/actions'

class Movie_id extends Component {

    goBackHandler = () => {
        this.props.initGoBackHandler()
    }

    render() {

        let movieDetails = null
        if (this.props.movieDetails) {
            movieDetails =
                <div className="flex  justify-center items-center  flex-col md:flex-row m-2 md:mx-10">
                <img className="flex h-auto m-2  w-1/2 md:w-1/3"
                        src={this.props.base_url + this.props.poster_size + this.props.movieDetails.poster_path}
                        alt="poster" />
                <div className="flex flex-col justify-center m-2 w-full md:w-1/2">
                        <h3 className='text-3xl m-2 w-full '>{this.props.movieDetails.original_title}</h3>
                        <h4 className="text-1xl m-2 w-full ">- "{this.props.movieDetails.tagline}"</h4>
                        <div className="p-5">{this.props.movieDetails.vote_average}</div>
                        <p className="text-lg w-full ">{this.props.movieDetails.overview}</p>
                    </div>
                </div>
        }

        return (
            <div>
                {movieDetails}
                <SimilarMovies />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieDetails: state.filmDetails,
        base_url: state.base_url,
        poster_size: state.poster_size_L,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        initGoBackHandler: () => dispatch({ type: actionTypes.GO_BACK })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie_id)
