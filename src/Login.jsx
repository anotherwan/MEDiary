import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router";

class Login extends Component {

  render () {
    return (
      <div className="login">
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Login;