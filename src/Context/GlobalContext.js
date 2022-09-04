import React, {createContext, useEffect, useReducer} from "react";
import AppReducer  from './AppReducer'; 

const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// used in useContext()
export const GlobalContext = createContext(initialState);

export const MovieProvider = (props) => {  
// MovieProvider is used cover the everything in the App component   
// put in state // create a reducer // action

const [state, dispatch] = useReducer (AppReducer, initialState);

useEffect(() => {
  localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
  localStorage.setItem('watched', JSON.stringify(state.watched));
}, [state]);


const addMovieToWatchlist = (movie) => {
  dispatch({type : "ADD_MOVIE_TO_WATCHLIST", payload: movie});
}

// you need the id  to remove the movie from watchlist
const removeMovieFromWatchlist = (id) => {
  dispatch({type : "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
};

// add to watched

const addMovieToWatched = (movie) => {
 dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
};

// remove from watched
const  moveToWatchlist = (movie) => {
  dispatch({type: "MOVIE_TO_WATCHLIST", payload: movie});
};

const removeFromWatched = id => {
  dispatch({type: "REMOVE_FROM_WATCHED", payload: id});
};

  return(
    <GlobalContext.Provider value={{watchlist: state.watchlist,
     watched: state.watched,
     addMovieToWatchlist, removeMovieFromWatchlist,
     addMovieToWatched, moveToWatchlist,removeFromWatched
     }}>

      {props.children}
      
    </GlobalContext.Provider>
  )
}


