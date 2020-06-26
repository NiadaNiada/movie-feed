import React, {Component} from 'react';
import {getMovieDetailsById} from '../../Services/Services';
import MovieDetails from './MovieDetails';
import {withRouter} from 'react-router';
import FontAwesome from "react-fontawesome";
import './Details.css';

class Details extends Component {
    state = {
        movieInfo: null,
        loading: true,
        error: true
    };

    componentDidMount() {
        if (this.props.match.params.movieId) {
            getMovieDetailsById(this.props.match.params.movieId).then(data => this.setState({ ...this.state, movieInfo: data, loading: false, error: false })).catch(error => this.setState({...this.state, error}))
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
        const {movieInfo, loading, error} = this.state;

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
            <button className="close-btn" onClick={this.closeModal}>
                <FontAwesome className="fa-times" name="times" size="2x"/>
            </button>
            {movieDetails}</div>;
    }
}

export default withRouter(Details);
