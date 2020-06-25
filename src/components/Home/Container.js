import React from 'react';
import NowPlaying from './NowPlaying';
import Latest from './Latest';
import Upcoming from './Upcoming';

const Container = () => {
    return (
        <div className="container">
            <NowPlaying/>
            <Latest/>
            <Upcoming/>
        </div>
    );
}

export default Container;