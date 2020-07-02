import React, {useEffect, useState} from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './Upcoming.css';

const Upcoming = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieAPI.getUpcoming().then(data => {
            setLoading(false);
            setMovies(data)
        }).catch(error => setError(!!error));
    }, [])

    return (
        <div className="upcoming">
            <h1 className="upcoming-title">Upcoming Movies</h1>
            <MovieList
                loading={loading}
                error={error}
                movies={movies}
            />
        </div>
    );
}

export default Upcoming;