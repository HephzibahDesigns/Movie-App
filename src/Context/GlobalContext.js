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
  localStorage.setItem('wattched', JSON.stringify(state.watched));
}, [state]);


const addMovieToWatchlist = (movie) => {
  dispatch({type : "ADD_MOVIE_TO_WATCHLIST", payload: movie});
}

const removeMovieFromWatchlist = (id) => {
  dispatch({type : "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
}

  return(
    <GlobalContext.Provider value={{watchlist: state.watchlist,
     watched: state.watched,
     addMovieToWatchlist, removeMovieFromWatchlist,
     }}>

      {props.children}
      
    </GlobalContext.Provider>
  )
}


