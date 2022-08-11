import React, {createContext, useEffect, useReducer} from "react";
import AppReducer  from './AppReducer'; 

const initialState = {
  watchlist: [],
  watched: []
}

// used in useContext()
export const GlobalContext = createContext(initialState);

export const MovieProvider = (props) => {  
// MovieProvider is used cover the everything in the App component   
// put in state
// create a reducer
// action

const [state, dispatch] = useReducer (AppReducer, initialState)

const addMovieToWatchlist = (movie) => {
  dispatch({type : "ADD_MOVIE_TO_WATCHLIST", payload: movie});
}

  return(
    <GlobalContext.Provider value={{watchlist: state.watchlist,
     watched: state.watched,
     addMovieToWatchlist,
     }}>
      {props.children}
    </GlobalContext.Provider>
  )
}


