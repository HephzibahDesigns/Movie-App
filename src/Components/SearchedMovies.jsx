import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const SearchedMovies = ({movie}) => {
  const {addMovieToWatchlist, addMovieToWatched, watchlist, watched}  = useContext(GlobalContext)

  // to find if there's a movie 
  let storedMovie = watchlist.find(o => o.id === movie.id);
  let storedMovieWatched = watched.find(o => o.id === movie.id);
  const disableWatchlist = storedMovie ? true : storedMovieWatched ? true : false;
  const disableWatched = storedMovieWatched ? true : false ;

  return (  
     <div className="movie-card">
       <div className="wrapper">
         {movie.poster_path ? (
           <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
         ) : (
           <div className="filler-poster"></div>
         )}
       </div>

       <div className="movie-info">
         <div className="header">
           <h3 className="title"> 
             {movie.title} </h3>

           <h4 className="release-date"> 
           {movie.release_date.substring(0, 4)} </h4>
         </div>

         <div className="movie-control">
           <button className="btn"
            disabled = {disableWatchlist}
            onClick={() => addMovieToWatchlist(movie)}>
             Add to Watchlist
           </button>
         </div>

         <div className="movie-control">
           <button className="btn"
            disabled = {disableWatched}
            onClick={() => addMovieToWatched(movie)}>
             Add to Watched
           </button>
         </div>
       </div>
     </div>
  ) 
};

export default SearchedMovies;
