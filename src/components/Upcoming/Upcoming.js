import React, {Component} from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './Upcoming.css';

export default class Upcoming extends Component {
    state = {
        movies: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        movieAPI.getUpcoming().then(data => this.setState({
            ...this.state,
            movies: data,
            loading: false,
            error: false
        })).catch(error => this.setState({...this.state, error}))
    }

    render() {
        return (
            <div className="upcoming">
                <h1 className="upcoming-title">Upcoming Movies</h1>
                <MovieList
                    loading={this.state.loading}
                    error={this.state.error}
                    movies={this.state.movies}
                />
            </div>
        );
    }
}