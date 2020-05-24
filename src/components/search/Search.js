import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import * as actionTypes from '../../store/actions'

class Search extends Component {


    searchHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/')
        this.props.onInitSearchedMovies(this.props.searchText);
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push('/')
            this.props.onInitSearchedMovies(this.props.searchText);
        }
    }

    render() {
        return (
            <div className="py-5 md:py-10">
                <div className="flex justify-between bg-gray-600 rounded-full pl-5   mx-8 md:mx-40 lg:mx-64">
                    <input 
                        className="bg-transparent outline-none w-4/5 p-2  text-base md:text-3xl"  
                    placeholder="Search for a movie..." type="text"
                        value={this.props.searchText}
                        onChange={this.props.newSearch} 
                        onKeyDown={this._handleKeyDown}/>
                    <button
                        onClick={this.searchHandler}
                        className="outline-none rounded-full bg-red-800  px-5 md:px-10  text-base md:text-3xl">
                        <NavLink to="/">Go</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchText: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newSearch: (e) => {
            dispatch({ type: actionTypes.FILTER_BY_VALUE, text: e.target.value })
        }, 
        onInitSearchedMovies: (query) => 
            dispatch(actionTypes.initSearchedMovies(query))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
