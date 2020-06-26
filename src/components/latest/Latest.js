import React, {useEffect, useState} from 'react';
import * as movieAPI from '../../services/Services';
import './Latest.css';
import Movie from "../movie/Movie";
import {withRouter} from 'react-router';
import { useHistory} from 'react-router';

const Latest = () => {
    const [movie, setMovie] = useState({})
    const history = useHistory();

    const selectedMovieHandler = id => {
        if (id !== null) {
            history.push(`/${movie.id}`)

        }
    };

    useEffect(() => {
        async function fetchLatest() {
            const response = await movieAPI.getLatest();
            setMovie(response)
        }

        fetchLatest();

    }, []);

    if (movie) {
        return (
            <div className="latest">
                <h1>Latest Movie</h1>
                <Movie
                    onClick={()=>selectedMovieHandler(movie.id)}
                />
            </div>
        )
    } else {
        return (
            <>
                <h1>Latest Movie: {movie.title}</h1>
            </>
        )
    }
}
export default withRouter(Latest);