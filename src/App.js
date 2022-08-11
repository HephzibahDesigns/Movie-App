import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Add from './Components/Add';
import Watched from './Components/Watched';
import './FontAwesome/css/all.min.css';
import Watchlist from './Components/Watchlist';
import {MovieProvider} from "./Context/GlobalContext"

function App() {
  return (
    <div className="App">
    <MovieProvider>
     <BrowserRouter>
     <Nav />
     <Routes>
      <Route exact path='/' element={<Movies />} />
      <Route path='/watched' element={<Watched />} />
      <Route path='/watchlist' element={<Watchlist />} />
      <Route path='/add' element={<Add />} />

     </Routes>
     </BrowserRouter>
     </MovieProvider>
    </div>
  );
}

export default App;
