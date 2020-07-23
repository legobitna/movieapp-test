import React from 'react'
import MovieCard from './MovieCard'

export default function MovieBoard(props) {
    let movieList = props.movieList
    return (
        <div>
            {movieList.map(movie=>{return(
                 <MovieCard movie={movie}/>
            )})}
           
        </div>
    )
}
