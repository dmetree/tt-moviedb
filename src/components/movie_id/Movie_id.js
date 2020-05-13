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
                <div className="flex justify-center items-center">
                    <img className="w-1/3 h-auto m-2"
                        src={this.props.base_url + this.props.poster_size + this.props.movieDetails.poster_path}
                        alt="poster" />
                    <div className="m-2">
                        <h3 className='text-3xl w-64'>{this.props.movieDetails.original_title}</h3>
                        <h4 className="text-1xl w-64">- "{this.props.movieDetails.tagline}"</h4>
                        <div className="p-5">{this.props.movieDetails.vote_average}</div>
                        <p className="w-64 text-lg">{this.props.movieDetails.overview}</p>
                    </div>
                </div>
        }

        return (
            <div>
                {movieDetails}
                <SimilarMovies/>
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
