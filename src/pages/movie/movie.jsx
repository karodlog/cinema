import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import MovieList from '../../containers/movie-list/MovieList';

const Movie = (props) => {

    const {screen} = props
    
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);

    useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${screen}?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}`)
    .then
    (({data})=>{
            setmovies(data.results)
        }
        )
    
    }, [page, screen])

const handleClick = ()=>{
    setpage(p => p+1)
}
const resetPage = ()=>{
    setpage(1)
}


    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <button onClick={resetPage}>reset</button>
            <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default Movie;