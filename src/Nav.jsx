import React, {Component} from 'react';
import { Link } from "react-router";

import medProfile from '../public/images/medProfile.svg';
import bandaid from '../public/images/BandaidLogo.svg';

import LoginDisplay from './LoginDisplay';

import "../public/styles/Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null
    }
    this.onClick = this.handleLogout.bind(this);
  }

  handleLogout = (event) => {
    localStorage.setItem('uid', '');
  }

  loggedIn = () => {
    this.setState({isLoggedIn: true})
  }

  loggedOut = () => {
    this.setState({isLoggedIn: false})
  }

  render() {

    return (
      <div className="navbar fixed-top">
        <div className="logo-container">
          <img src={bandaid} alt="bandaid" />
            <h5>MEDiary</h5>
        </div>
        <div>
          <LoginDisplay />
        </div>
        <div className="nav-list-wrapper">
          <ul className="nav-list">
            <li>
              <Link to='/register'>Registration</Link>
            </li>
            <li>
              <img src={medProfile} alt="Profile" />
              <h6>Profile</h6>
            </li>
            <li>
              <Link to='/login' onClick={this.onClick}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;