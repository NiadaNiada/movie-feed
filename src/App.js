import React from 'react';
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path="/:movieId?" component={Container} exact/>
                    <Route component={NotFound}/>
                </Switch>
                <footer className="footer">©Copyright Diana Arsenii 2020</footer>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
