import React from 'react';
import NowPlaying from '../nowPlaying/NowPlaying';
import Latest from '../latest/Latest';
import Upcoming from '../upcoming/Upcoming';
import './Container.css'
import { withRouter } from "react-router";
import Details from "../details/Details";
import Popular from "../popular/Popular";


const Container = props => {
    return (
        <div className="container">
            <NowPlaying/>
            <Popular/>
            <Upcoming/>
            {(props.match.params.movieId) && <Details /> }
        </div>
    );
}

export default withRouter(Container);