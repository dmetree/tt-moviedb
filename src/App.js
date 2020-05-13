import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'

import Search from './components/search/Search'
import Categories from './components/categories/Categories'
import MovieList from './components/movie_list/Movie_list'
import MovieId from './components/movie_id/Movie_id'


class App extends Component {


  render (){
   	return (
      <div className="bg-red-900 text-gray-300">
          <Route path='/' component={Search} />
          <Route path='/' component={Categories} />
          <Route exact path='/movie_details' component={MovieId}/>
          <Route exact path='/' component={MovieList} />
          <Redirect to='/' />
      </div>
    );
  }

}

export default App;
