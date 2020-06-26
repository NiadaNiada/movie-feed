import React, { Component } from 'react';
import { getMovieDetailsById } from '../../services/Services';
import MovieDetails from './MovieDetails';
import {withRouter } from 'react-router';
import FontAwesome from "react-fontawesome";
import './Details.css';

class Details extends Component {
    state = {
        movieInfo: null,
        loading: true,
        error: true
    };

    async componentDidMount() {
        if (this.props.match.params.movieId) {
            try {
                const movieInfo = await getMovieDetailsById(this.props.match.params.movieId);
                this.setState({
                    loading: false,
                    movieInfo,
                    error: false
                });
            } catch (err) {
                this.setState({ loading: false, error: true });
            }
        }
    }

    closeModal = () => {
        this.props.history.push("/")
        const body = document.body;
        body.style.overflow = "auto";
    }

    render() {
        const body = document.body;
        body.style.overflow = "hidden";
        const { movieInfo, loading, error } = this.state;

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
        }

        if (!loading && movieInfo) {
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
            <button className="close-btn" onClick={this.closeModal}>
                <FontAwesome className="fa-times" name="times" size="2x" />
                </button>
            {movieDetails}</div>;
    }
}

export default withRouter(Details);
