import React, {Component} from 'react';
import Search from './components/search/Search'
import MovieList from './components/movie_list/Movie_list'


class App extends Component {


  render (){
   	return (
      <div className="bg-red-900 text-gray-300">
		  	<Search/>
        	<MovieList/>
      </div>
    );
  }

}

export default App;
