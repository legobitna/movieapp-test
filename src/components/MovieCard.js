import React from 'react'

export default function MovieCard(props) {
    let movie = props.movie
    return (
        <div>
            <h1>{movie.title}</h1><h2>{movie.popularity}</h2>
        </div>
    )
}
