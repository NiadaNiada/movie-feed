import React from 'react';
import {BASE_POSTER_PATH} from '../../Constants/Constants';
import './Movie.css';

const Movie = props => {
    if (props.poster) {
        return (
            <div className="movie-component"
                 onClick={() => props.onClick()}>
                {props.poster && (
                    <img
                        data-testid="movie-poster"
                        src={`${BASE_POSTER_PATH}/w300${props.poster}`}
                        alt="movie poster"
                        className="movie-poster"
                    />
                )}
            </div>
        )
    }
    return (
        <div data-testid="no-movie-poster"
            className="no-movie-poster"
             onClick={() => props.onClick()}/>

    )

}


export default Movie;