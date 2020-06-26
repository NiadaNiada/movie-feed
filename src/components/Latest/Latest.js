import React, {useEffect, useState} from 'react';
import * as movieAPI from '../../Services/Services';
import './Latest.css';
import Movie from "../Movie/Movie";
import {useHistory, withRouter} from 'react-router';

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
                    onClick={() => selectedMovieHandler(movie.id)}
                />
            </div>
        )
    }
}
export default withRouter(Latest);