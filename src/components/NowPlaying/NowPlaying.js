import React, {useEffect, useState} from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './NowPlaying.css';

const NowPlaying = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieAPI.getNowPlaying().then(data => {
            setLoading(false);
            setMovies(data)
        }).catch(error => setError(!!error));
    }, [])


    return (
        <div className="now-playing">
            <h1 className="now-playing-title">Playing Now Movies</h1>
            <MovieList
                loading={loading}
                error={error}
                movies={movies}
            />
        </div>
    );
}

export default NowPlaying;