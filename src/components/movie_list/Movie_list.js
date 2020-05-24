import React, { Component } from 'react'
import MovieListItem from './Movie_list_item'
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'



class Movie_list extends Component {


    componentDidMount() {
        if (this.props.movies === null){
            this.props.onInitPopularMovies();
        }
    }

    movieClickedHandler = (id) => {
        this.props.onMovieIdClick(id)
        this.props.onGoToMovie(id)
        this.props.onGetSimilar(id)
        this.props.history.push('/movie_details');
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
            <div className='flex flex-wrap justify-center mx-8 md:mx-20 lg:mx-40'>
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
        onGoToMovie: (id) => dispatch(actionTypes.initMovieById(id)),
        onGetSimilar: (id) => dispatch(actionTypes.initSimilarMovies(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie_list)
