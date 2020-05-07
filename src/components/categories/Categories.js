import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class Categories extends Component {


    render() {
        return (
            <div className="flex justify-center">
                <button 
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600" 
                    onClick={this.props.onInitPopularMovies}>Popular</button>
               
                <button 
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600" 
                    onClick={this.props.onInitTopRatedMovies}>Top Rated</button>
                <button
                    className="outline-none px-10 py-1 m-1 rounded-full bg-gray-600"
                    onClick={this.props.onInitUpcommingMovies}>Upcomming</button>
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