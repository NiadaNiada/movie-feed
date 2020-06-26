import React, { Component } from 'react';
import MovieList from '../../components/movie/MovieList';
import * as movieAPI from '../../services/Services';
import './NowPlaying.css';

export default class NowPlaying extends Component {
    state = {
        movies: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const movies = await movieAPI.getNowPlaying();
            this.setState({ movies, loading: false });
        } catch (err) {
            this.setState({ loading: false, error: true });
        }
    }

    render() {
        return (
            <div className="now-playing">
                <h1 className="now-playing-title">Playing Now</h1>
                <MovieList
                    loading={this.state.loading}
                    error={this.state.error}
                    movies={this.state.movies}
                />
            </div>
        );
    }
}