import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router";


import Subbody from './Subbody.jsx';
import Login from './Login';

class Main extends Component {

  render () {
    return (
      <div className="main">
        <Login />
        <Subbody />
      </div>
    )
  }
}

export default Main;