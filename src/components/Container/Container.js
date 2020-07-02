import React from 'react';
import NowPlaying from '../NowPlaying/NowPlaying';
import Upcoming from '../Upcoming/Upcoming';
import './Container.css'
import {withRouter, useParams} from "react-router";
import Details from "../Details/Details";
import Popular from "../Popular/Popular";


const Container = () => {

    const {movieId} = useParams();

    return (
        <div className="container">
            <NowPlaying/>
            <Popular/>
            <Upcoming/>
            {(movieId) && <Details/>}
        </div>
    );
}

export default withRouter(Container);