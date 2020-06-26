import React from 'react';
import NowPlaying from '../NowPlaying/NowPlaying';
import Upcoming from '../Upcoming/Upcoming';
import './Container.css'
import {withRouter} from "react-router";
import Details from "../Details/Details";
import Popular from "../Popular/Popular";


const Container = props => {
    return (
        <div className="container">
            <NowPlaying/>
            <Popular/>
            <Upcoming/>
            {(props.match.params.movieId) && <Details/>}
        </div>
    );
}

export default withRouter(Container);