import React from 'react';
import style from '../movie-list/movies.module.css'

const MovieListItem = (props) => {

    const {title, overview, poster_path,vote_average,release_date} = props
    return (
        <div className={style.movies}>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="" style={{height: "250px"}} />
            <div className={style.info}>
                <h1>{title}</h1>
                <h4>Note : <span style={vote_average>=8? {color: "forestgreen", fontWeight:"bolder", fontSize: "25px"}:  {color: "red", fontWeight:"bolder", fontSize: "25px"}}>{vote_average}</span>/10</h4>
                <p className={style.sortie}>Date de sortie : <span style={{fontWeight: "bolder"}}>{release_date}</span></p>
                <p className={style.descr}>{overview}</p>
                <br />
            </div>
        </div>
    );
};

export default MovieListItem;