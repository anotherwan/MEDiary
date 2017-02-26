import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router";

class Login extends Component {

  render () {
    return (
      <div className="login">
      <form>
        <label>
          Name:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
          <input type="submit" value="Submit" />
      </form>

      </div>
    )
  }
}

export default Login;