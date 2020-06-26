import React, { Component } from 'react';
import MovieList from '../../components/movie/MovieList';
import * as movieAPI from '../../services/Services';
import './Popular.css';

export default class Popular extends Component {
    state = {
        movies: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const movies = await movieAPI.getPopular();
            this.setState({ movies, loading: false });
        } catch (err) {
            this.setState({ loading: false, error: true });
        }
    }

    render() {
        return (
            <div className="popular">
                <h1 className="popular-title">Popular Movies</h1>
                <MovieList
                    loading={this.state.loading}
                    error={this.state.error}
                    movies={this.state.movies}
                />
            </div>
        );
    }
}