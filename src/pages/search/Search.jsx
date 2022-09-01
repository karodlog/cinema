import { useState } from "react";
import Searchbar from "../../containers/search-bar/Searchbar";
import axios from 'axios'
import MovieList from "../../containers/movie-list/MovieList";

const Search = () => {

    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);


    const searchFilm = (movieName)=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}&include_adult=false`)
        .then(({data})=> {
            setmovies(data.results)
        })
        .catch(err=> console.log(err))
        
    }


    return (
        <div>
           <Searchbar placeholder =  "Movie name"
           onSearch={searchFilm}/>
           
           {/* <ul>
            {
                movies.map(
                    movie => <li>{movie.title}</li>)
            }
           </ul> */}
           <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default Search;