import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';

import Register from './Register.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import BodyRegions from "./BodyRegions.jsx";
import Tracker from './Tracker.jsx';

const main = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/region/:region" component={BodyRegions} />
      <Route path="/tracker/:id" component={Tracker} />
      <Route path="/profile" component={Profile} />
    </Route>

  </Router>,

main);
