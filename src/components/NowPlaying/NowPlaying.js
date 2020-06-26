import React, {Component} from 'react';
import MovieList from '../Movie/MovieList';
import * as movieAPI from '../../Services/Services';
import './NowPlaying.css';

export default class NowPlaying extends Component {
    state = {
        movies: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        movieAPI.getNowPlaying().then(data => this.setState({
            ...this.state,
            movies: data,
            loading: false,
            error: false
        })).catch(error => this.setState({...this.state, error}))
    }

    render() {
        return (
            <div className="now-playing">
                <h1 className="now-playing-title">Playing Now Movies</h1>
                <MovieList
                    loading={this.state.loading}
                    error={this.state.error}
                    movies={this.state.movies}
                />
            </div>
        );
    }
}