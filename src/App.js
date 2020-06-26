import React from 'react';
import Header from './components/header/Header'
import Container from './components/Home/Container'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import './App.css';

const App = () => {
  return (
      <BrowserRouter>
          <React.Fragment>
              <Header />
              <Switch>
                  <Route path="/:movieId?" component={Container} exact />
                  <Route component={NotFound} />
              </Switch>
              <footer className="footer">©Copyright Diana Arsenii 2020</footer>
          </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
