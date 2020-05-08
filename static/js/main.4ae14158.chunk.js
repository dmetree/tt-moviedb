(this["webpackJsonptt-moviedb"]=this["webpackJsonptt-moviedb"]||[]).push([[0],{25:function(e,t,n){e.exports=n(54)},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=n(8),s=n(5),l=n(2),u=n(9),p=n.n(u),d="https://api.themoviedb.org/3/movie/",m="?api_key=957c988676c0d274a6d1cc76dd5c8a93",v="&language=en-US&page=1",f=function(){return function(e){p.a.get(d+"popular"+m+v).then((function(t){e({type:"SET_POPULAR_MOVIES",movies:t.data.results})})).catch((function(e){console.log("An error while getting data!")}))}},h=function(){return function(e){p.a.get(d+"top_rated"+m+v).then((function(t){e({type:"SET_TOP_RATED_MOVIES",movies:t.data.results})})).catch((function(e){console.log("An error while getting data!")}))}},b=function(){return function(e){p.a.get(d+"upcoming"+m+v).then((function(t){e({type:"SET_UPCOMMING_MOVIES",movies:t.data.results})})).catch((function(e){console.log("An error while getting data!")}))}},E={search:"",movies:null,selectedMoiveId:null,base_url:"http://image.tmdb.org/t/p/",poster_size:"w342"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_BY_VALUE":return Object(l.a)(Object(l.a)({},e),{},{search:t.text});case"INIT_MOVIE_ID":return Object(l.a)(Object(l.a)({},e),{},{selectedMoiveId:t.movie_id});case"SET_POPULAR_MOVIES":case"SET_TOP_RATED_MOVIES":case"SET_UPCOMMING_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{search:"",movies:t.movies});case"SET_SEARCHED_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{movies:t.movies});default:return e}},_=n(24),O=(n(53),n(3)),I=n(4),M=n(7),y=n(6),j=function(e){Object(M.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).searchHandler=function(t){t.preventDefault(),e.props.onInitSearchedMovies(e.props.searchText)},e}return Object(I.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"py-10"},r.a.createElement("div",{className:"flex justify-between bg-gray-600 rounded-full pl-5 mx-40"},r.a.createElement("input",{className:"bg-transparent outline-none text-3xl",placeholder:"Search for a movie...",type:"text",value:this.props.searchText,onChange:this.props.newSearch}),r.a.createElement("button",{onClick:this.searchHandler,className:"outline-none px-10 rounded-full bg-red-800"},"GO")))}}]),n}(a.Component),S=Object(s.b)((function(e){return{searchText:e.search}}),(function(e){return{newSearch:function(t){e({type:"FILTER_BY_VALUE",text:t.target.value})},onInitSearchedMovies:function(t){return e(function(e){var t=e;return function(e){p.a.get("https://api.themoviedb.org/3/search/movie"+m+"&language=en-US&query="+t+"&page=1&include_adult=true").then((function(t){e({type:"SET_SEARCHED_MOVIES",movies:t.data.results})})).catch((function(e){console.log("An error while getting data!")}))}}(t))}}}))(j),T=function(e){Object(M.a)(n,e);var t=Object(y.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("button",{className:"outline-none px-10 py-1 m-1 rounded-full bg-gray-600",onClick:this.props.onInitPopularMovies},"Popular"),r.a.createElement("button",{className:"outline-none px-10 py-1 m-1 rounded-full bg-gray-600",onClick:this.props.onInitTopRatedMovies},"Top Rated"),r.a.createElement("button",{className:"outline-none px-10 py-1 m-1 rounded-full bg-gray-600",onClick:this.props.onInitUpcommingMovies},"Upcomming"))}}]),n}(a.Component),x=Object(s.b)(null,(function(e){return{onInitPopularMovies:function(){return e(f())},onInitTopRatedMovies:function(){return e(h())},onInitUpcommingMovies:function(){return e(b())}}}))(T);var k=function(e){return r.a.createElement("div",{className:"flex flex-col flex-wrap justify-between w-64 m-2"},r.a.createElement("img",{className:"w-64 h-auto",src:e.base_url+e.poster_size+e.poster,alt:"poster",onClick:e.clicked}),r.a.createElement("div",{className:""},e.releasedate),r.a.createElement("div",{className:""},e.vote))},w=function(e){Object(M.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).movieClickedHandler=function(t){e.props.onMovieIdClick(t)},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitPopularMovies()}},{key:"render",value:function(){var e=this;this.props.selectedMovieId&&console.log("Got this id: "+this.props.selectedMovieId);var t=r.a.createElement("div",null,"Loading movies");return this.props.movies&&(t=this.props.movies.map((function(t){return r.a.createElement(k,{key:t.id,title:t.title,releasedate:t.release_date,vote:t.vote_average,poster:t.poster_path,base_url:e.props.base_url,poster_size:e.props.poster_size,clicked:function(){return e.movieClickedHandler(t.id)}})}))),r.a.createElement("div",{className:"flex flex-wrap justify-center mx-40"},t)}}]),n}(a.Component),N=Object(s.b)((function(e){return{movies:e.movies,base_url:e.base_url,poster_size:e.poster_size,selectedMovieId:e.selectedMovieId}}),(function(e){return{onInitPopularMovies:function(){return e(f())},onInitTopRatedMovies:function(){return e(h())},onInitUpcommingMovies:function(){return e(b())},onMovieIdClick:function(t){return e({type:"INIT_MOVIE_ID",movie_id:t})}}}))(w),C=function(e){Object(M.a)(n,e);var t=Object(y.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-red-900 text-gray-300"},r.a.createElement(S,null),r.a.createElement(x,null),r.a.createElement(N,null))}}]),n}(a.Component),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,P=Object(c.d)(g,A(Object(c.a)(_.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:P},r.a.createElement(C,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.4ae14158.chunk.js.map