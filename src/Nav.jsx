import React, {Component} from 'react';
import { Link } from "react-router";

import medProfile from '../public/images/medProfile.svg';
import bandaid from '../public/images/BandaidLogo.svg';

import '../public/styles/Nav.css';
import LoginDisplay from './LoginDisplay.jsx';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.handleLogout.bind(this);
  }

  handleLogout = (event) => {
    localStorage.setItem('uid', '');
  }

  render() {
    if (localStorage.getItem('uid'))
      return (
        <div className="navbar fixed-top">
          <div className="logo-container">
          <Link className="bandaid" to="/">
            <img src={bandaid} alt="bandaid" height="40" width="40"/>
          </Link>
            <h5>MEDiary</h5>
          </div>
          <div className="nav-list-wrapper">
            <ul className="nav-list">
              <div>
                <LoginDisplay />
              </div>
              <li>
                <Link to='/profile'>
                  <img src={medProfile} alt="Profile" height="40" width="40" />
                </Link>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/login' onClick={this.onClick}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
    )
      else
      return (
        <div className="navbar fixed-top">
          <div className="logo-container">
            <Link className="bandaid" to="/">
              <img src={bandaid} alt="bandaid" height="40" width="40"/>
            </Link>
            <h5>MEDiary</h5>
          </div>
          <div className="nav-list-wrapper">
            <ul className="nav-list">
              <div>
                <LoginDisplay />
              </div>
              <li>
                <Link to='/register'>Registration</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      )
  }
}

export default Nav;
