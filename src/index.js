import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';
import './index.css';

import Main from './Main.jsx';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import Register from './Register.jsx';
import Subbody from './Subbody.jsx';

const main = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={App}>

      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <IndexRoute component={Main}></IndexRoute>
        <Route path="/head" component={Subbody}></Route>
        <Route path="/torso" component={Subbody}></Route>

    </Route>

  </Router>,

main);
