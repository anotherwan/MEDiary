import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';
import './index.css';

import Home from './Home.jsx';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import Register from './Register.jsx';
import Tracker from './Tracker.jsx';
import BodyRegions from "./BodyRegions.jsx";
import BodyParts from './BodyParts.jsx';

const main = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/region/:part" component={BodyParts} />
      <Route path="/tracker" component={Tracker} />

    </Route>

  </Router>,

main);
