import React, {Component} from 'react';
import '../public/styles/App.css';
import { Link } from "react-router";

class Login extends Component {

  render () {
    return (
      <div className="login">
      <form>
        <label>
          Name:
          <input type="email" name="email"/>
          <br/>
        </label>
        <label>
          Password:
          <input type="password" name="password" />
          <br/>
        </label>
          <input type="submit" value="Submit" />
      </form>

      </div>
    )
  }
}

export default Login;
