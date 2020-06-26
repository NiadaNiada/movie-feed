import React, {Component} from 'react';
import {BASE_POSTER_PATH,} from '../../Constants/Constants';
import './Details.css';
import PropTypes from "prop-types";
import {calcTime, dateFormat} from "../../helper";
import FontAwesome from "react-fontawesome";

class MovieDetails extends Component {

    render() {
        const {movieInfo} = this.props;

        if (movieInfo) {
            return (
                <>
                    <div className="movie-details-poster-wrapper">
                        {movieInfo.poster_path ? (<img
                            className="movie-details-poster"
                            src={`${BASE_POSTER_PATH}/w500${movieInfo.poster_path}`}
                            alt="movie poster"
                        />) : (
                            <div className="no-movie-poster"/>
                        )}

                        <div className="movie-details-info">
                            <span className="border"></span>
                            <div className="movie-details-overview">
                                <FontAwesome className="icon" name="clipboard"/>
                                <strong>Movie Overview:</strong> {movieInfo.overview}
                            </div>
                            <span className="border"></span>
                            <div className="movie-details">
                                <FontAwesome className="icon" name="calendar"/>
                                {movieInfo.release_date ? (
                                    <strong>Release Date: {dateFormat(movieInfo.release_date)}</strong>) : (
                                    <strong>No release date available</strong>)}
                            </div>
                            <span className="border"></span>
                            <div className="movie-details-genres">
                                <FontAwesome className="icon" name="film"/>
                                {!movieInfo.genres.length && (<strong>No genres available</strong>)}
                                {movieInfo.genres.length >= 1 && (
                                    <strong>Genres:</strong>
                                )}{" "}
                                {movieInfo.genres.map((element, i) => {
                                    return (
                                        <p key={i} className="genres">
                                            {element.name}
                                        </p>
                                    );
                                })}
                            </div>
                            <span className="border"></span>
                            <div className="movie-details">
                                <FontAwesome className="icon" name="history"/>
                                {movieInfo.runtime ? (<strong>Duration: {calcTime(movieInfo.runtime)}</strong>) : (
                                    <strong>No duration available</strong>)}
                            </div>
                            <span className="border"></span>
                            <div className="movie-details">
                                <FontAwesome className="icon" name="star"/>
                                {movieInfo.vote_average ? (
                                    <strong>Average Rating: {movieInfo.vote_average}</strong>
                                ) : (<strong>No rating available</strong>)}
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return (
            <div className="modal">No Movie Found</div>
        )
    }
}

MovieDetails.propTypes = {
    movieInfo: PropTypes.exact({
        adult: PropTypes.bool,
        title: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
        vote_average: PropTypes.number,
        runtime: PropTypes.number || null,
        poster: PropTypes.string,
        backdrop_path: PropTypes.string || null,
        belongs_to_collection: PropTypes.string || null,
        budget: PropTypes.number,
        homepage: PropTypes.string || null,
        id: PropTypes.number,
        imdb_id: PropTypes.string || null,
        original_language: PropTypes.string,
        original_title: PropTypes.string,
        popularity: PropTypes.number,
        poster_path: PropTypes.string || null,
        production_companies: PropTypes.array,
        production_countries: PropTypes.array,
        revenue: PropTypes.number,
        spoken_languages: PropTypes.array,
        status: PropTypes.string,
        tagline: PropTypes.string || null,
        video: PropTypes.bool,
        vote_count: PropTypes.number
    })
};

export default MovieDetails;
