import React from 'react';
import MovieListItem from './MovieListItem';
import style from '../movie-list/movies.module.css'


const MovieList = (props) => {

    const {movies} = props
    return (
        <div className={style.movieGrid}>
            {movies.map(
                movie => <MovieListItem
                key={movie.id}
                // title={movie.title}
                // overview={movie.overview}
                // poster_path = {movie.poster_path}
                {...movie}
                />
            )}
        </div>
    );
};

export default MovieList;