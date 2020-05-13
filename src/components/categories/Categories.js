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
            <div className="flex justify-center">
                <button 
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600" 
                    onClick={this.popularClickHandler}>Popular</button>
                <button 
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600" 
                    onClick={this.topRatedClickHandler}>Top Rated</button>
                <button
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600"
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