import React, {useState} from 'react'
import axios from 'axios';
import SearchedMovies from './SearchedMovies';

const Add = () => {
const [search, setSearch] = useState("");
const [queries, setQueries] = useState([]);

const updateSearch = (e) => {
  e.preventDefault();
  setSearch(e.target.value);

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1c934af3a7fc5f0cf8893ddedffa084&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(response =>{
    setQueries(response.data.results)}).catch((err) => { console.log(err)})
}

//mistakes i made trying to fetch
// const movieApi = async () => {
//   const fetchApi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
//   const response = await fetchApi.json();
//   console.log(response);
//   setQuery(response)
// } 

// useEffect(() => {
//    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1c934af3a7fc5f0cf8893ddedffa084&language=en-US&page=1&include_adult=false`).then(response =>{
//      console.log(response)}).catch((err) =>{
//      console.log(err)
//    })
// }, []);

  return (
    <div className='add-input'>
      <div className='container'>
      <div className='search-bar'>
      <input type="text" placeholder="search for movies" value= {search} onChange={updateSearch} />
      </div>
      
      <ul className='results'>
        {queries.map(movie => (
        <li key={movie.id}>
          <SearchedMovies movie={movie} />
        </li>
      ))}
      </ul>
      </div>
      </div> 

  )
}

export default Add
