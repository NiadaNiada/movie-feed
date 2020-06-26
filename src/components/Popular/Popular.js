import React, { Component } from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './Popular.css';

export default class Popular extends Component {
    state = {
        movies: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        movieAPI.getPopular().then(data => this.setState({ ...this.state, movies: data, loading: false, error: false })).catch(error => this.setState({...this.state, error}))
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