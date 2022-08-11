import React from "react";

const SearchedMovies = ({movie}) => {
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
           <button className="btn">
             Add to Watchlist
           </button>
         </div>
       </div>
     </div>
  ) 
};

export default SearchedMovies;
