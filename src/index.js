import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';
import '../public/styles/index.css';

import Home from './Home.jsx';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import Register from './Register.jsx';
import Torso from "./Torso.jsx";
import Head from "./Head.jsx";

const main = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/head" component={Head} />
      <Route path="/torso" component={Torso} />

    </Route>

  </Router>,

main);
