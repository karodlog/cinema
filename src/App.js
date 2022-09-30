import './App.css';
import Search from './pages/search/Search';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Movie from './pages/movie/movie';
import NavBar from './containers/nav-bar/NavBar';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/popular' element={<Movie screen="popular"/>}></Route>
        <Route path='/nowplaying' element={<Movie screen="now_playing"/>}></Route>
        <Route path='*' element={<Navigate to="/search"/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
