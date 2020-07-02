import React, {useEffect, useState} from 'react';
import {getMovieDetailsById} from '../../Services/Services';
import MovieDetails from './MovieDetails';
import {useHistory, useParams, withRouter} from 'react-router';
import FontAwesome from "react-fontawesome";
import './Details.css';

const Details = () => {
    const [state, setState] = useState({
        movieInfo: null,
        loading: false,
        error: false
    });
    const {movieInfo, loading, error} = state;
    const {movieId} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (movieId) {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            getMovieDetailsById(movieId).then(data => setState({
                movieInfo: data,
                loading: false,
                error: false
            })).catch(error => setState({
                movieInfo: null,
                loading: false,
                error: !!error
            }));
        }
    },[movieId])

    const closeModal = () => {
        history.push("/")
        const body = document.body;
        body.style.overflow = "auto";
    }

    const body = document.body;
    body.style.overflow = "hidden";


    let movieDetails = null;

    if (error) {
        movieDetails = (
            <h3>Woops, something went wrong trying to fetch movie details.</h3>
        );
    }

    if (loading) {
        movieDetails = (
            <>
                <h1>Movie Details</h1>
                <h3>Loading movie details now...</h3>
            </>
        );
    } else if (movieInfo) {
        movieDetails = (
            <div className="movie-details-wrapper">
                <div className="movie-details-title">
                    <h1>{movieInfo.title}</h1>
                </div>
                <MovieDetails
                    movieInfo={movieInfo}
                />
            </div>
        );
    }

    return <div className="modal">
        <button className="close-btn" onClick={closeModal}>
            <FontAwesome className="fa-times" name="times" size="2x"/>
        </button>
        {movieDetails}</div>;
}

export default withRouter(Details);
