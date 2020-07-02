import React, {useEffect, useState} from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './Popular.css';

const Popular = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieAPI.getPopular().then(data => {
            setLoading(false);
            setMovies(data)
        }).catch(error => setError(!!error));
    }, [])

    return (
        <div className="popular" data-testid="popular-movies">
            <h1 className="popular-title">Popular Movies</h1>
            <MovieList
                loading={loading}
                error={error}
                movies={movies}
            />
        </div>
    );
}

export default Popular;