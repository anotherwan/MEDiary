import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';

import Register from './Register.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import BodyRegions from "./BodyRegions.jsx";
import Tracker from './Tracker.jsx';
import AboutUs from './AboutUs.jsx';
import Profile from './Profile.jsx';

const main = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={App}>

      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" componenet={Profile} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/region/:region" component={BodyRegions} />
      <Route path="/tracker/:id" component={Tracker} />
      <Route path="/dashboard" component={Dashboard} />

    </Route>

  </Router>,

main);
