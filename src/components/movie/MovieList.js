import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Movie from './Movie';
import './Movie.css';

class MovieList extends Component {
    state = {
        id: null,
        movieDetails: false
    };

    selectedMovieHandler = movieId => {
        if (movieId !== null) {
            this.setState({ id: movieId, movieDetails: true });
            this.props.history.push(`/${movieId}`)

        }
        console.log(movieId)
    };



    render() {
        const { error, loading, movies } = this.props;
        let movieInfo = null;

        if (!loading && !error && movies.length > 0) {
            movieInfo = movies.map(movie => {
                return (
                    <div className="movie-list" key={movie.id}>
                        <Movie
                            key={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            genre={movie.genre}
                            movieId={movie.id}
                            rating={movie.vote_average}
                            duration={movie.runtime}
                            poster={movie.poster_path}
                            released={movie.release_date}
                            onClick={()=>this.selectedMovieHandler(movie.id)}
                        />
                        </div>
                );
            });
        }

        if (error) {
            movieInfo = (
                <h3>
                    Woops, something went wrong trying to fetch movies in theaters now.
                </h3>
            );
        }

        if (loading) {
            movieInfo = <h3>Loading movie data now...</h3>;
        }

        return (
            <div className="movies">
                        {movieInfo}
                </div>

        );
    }
}

export default withRouter(MovieList);
