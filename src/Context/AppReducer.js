export default (state, action) => {

  switch(action.type){
    case "ADD_MOVIE_TO_WATCHLIST" :
      return {
        ...state, 
        watchlist: [action.payload, ...state.watchlist]
      };

      case "REMOVE_MOVIE_FROM_WATCHLIST" :
        return {
          ...state, 
          watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
        };

        case "ADD_MOVIE_TO_WATCHED" :
          return {
            ...state, 
            watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
            Watched: [action.payload,  ...state.Watched],
          };

          // opposite of ADD MOVIE TO WATCHED
          case "MOVE_TO_WATCHLIST" :
            return{
              ...state,
              Watched: state.Watched.filter(movie => movie.id !== action.payload.id),
              watchlist: [action.payload, ...state.watchlist],
            };
            
            // opposite of REMOVE MOVIE FROM WATCHLIST
            case "REMOVE_FROM_WATCHLIST" :
              return{
                ...state,
                Watched: state.Watched.filter(movie => movie.id !== action.payload.id),
              };
  
    default: 
    return state;
  }
}