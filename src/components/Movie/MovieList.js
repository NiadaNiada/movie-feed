import React from 'react';
import {withRouter, useHistory} from 'react-router';
import Movie from './Movie';
import './Movie.css';

const MovieList = props => {

    const history = useHistory();

    const selectedMovieHandler = movieId => {
        if (movieId !== null) {
            history.push(`/${movieId}`)
        }
    };
        const { error, loading, movies } = props;
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
                            onClick={()=>selectedMovieHandler(movie.id)}
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

export default withRouter(MovieList);
