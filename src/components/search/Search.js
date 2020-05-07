import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions'

class Search extends Component {
    render() {
        return (
            <div className="py-10">
                <div className="flex justify-between bg-gray-600 rounded-full px-5 mx-40">
                    <input 
                    className="bg-transparent outline-none text-3xl"  
                    placeholder="Search for a movie..." type="text"
                        value={this.props.searchText}
                        onChange={this.props.newSearch} />
                    <button
                        onClick={this.props.onInitSearchedMovies}
                        className="outline-none px-10 rounded-full bg-red-900">GO
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
        onInitSearchedMovies: () => 
            dispatch(actionTypes.initSearchedMovies())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
