import React, { Component } from 'react'
import MovieListItem from './Movie_list_item'
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'



class Movie_list extends Component {



    componentDidMount() {
        this.props.onInitPopularMovies();
    }

    movieClickedHandler = (id) => {
        this.props.onMovieIdClick(id);
    } 

    render() {

        if (this.props.selectedMovieId){
            console.log('Got this id: ' + this.props.selectedMovieId)
        }

        let movielist = <div>Loading movies</div>
        
        if (this.props.movies){
            movielist = this.props.movies.map(movie => {
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
            <div className='flex flex-wrap justify-center mx-40'>
                {movielist}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        base_url: state.base_url,
        poster_size: state.poster_size,
        selectedMovieId: state.selectedMovieId 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPopularMovies: () => dispatch(actionTypes.initPopularMovies()),
        onInitTopRatedMovies: () => dispatch(actionTypes.initTopRatedMovies()),
        onInitUpcommingMovies: () => dispatch(actionTypes.initUpcommingMovies()),
        onMovieIdClick: (id) => dispatch({type: actionTypes.INIT_MOVIE_ID, movie_id: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie_list)
