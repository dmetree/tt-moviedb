import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class Categories extends Component {

    popularClickHandler = () => {
        this.props.history.push('/')
        this.props.onInitPopularMovies()
    }

    topRatedClickHandler = () => {
        this.props.history.push('/')
        this.props.onInitTopRatedMovies()
    }

    upcommingClickHandler = () => {
        this.props.history.push('/')
        this.props.onInitUpcommingMovies()
    }


    render() {
        return (
            <div className="flex justify-center flex-col md:flex-row">
                <button 
                    className="outline-none py-1 m-1 rounded-full bg-gray-600  px-5 md:px-10  mx-8 md:mx-2" 
                    onClick={this.popularClickHandler}>Popular</button>
                <button 
                    className="outline-none py-1 m-1 rounded-full bg-gray-600  px-5 md:px-10  mx-8 md:mx-2" 
                    onClick={this.topRatedClickHandler}>Top Rated</button>
                <button
                    className="outline-none py-1 m-1 rounded-full bg-gray-600  px-5 md:px-10  mx-8 md:mx-2"
                    onClick={this.upcommingClickHandler}>Upcomming</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPopularMovies: () => dispatch(actionTypes.initPopularMovies()),
        onInitTopRatedMovies: () => dispatch(actionTypes.initTopRatedMovies()),
        onInitUpcommingMovies: () => dispatch(actionTypes.initUpcommingMovies())
        
    }
}

export default connect(null, mapDispatchToProps)(Categories)