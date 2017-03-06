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
        <Link className="bandaid" to="/">
          <img src={bandaid} alt="bandaid" height="40" width="40"/>
        </Link>
          <h5>MEDiary</h5>
        </div>
        <div className="nav-list-wrapper">
          <ul className="nav-list">
            <li>
              <LoginDisplay />
            </li>
            <li>
              <Link to='/register'>Registration</Link>
            </li>
            <li>
              <img src={medProfile} alt="Profile" />
              <h6>Profile</h6>
            </li>
            <li>
              {localStorage.getItem('uid') === '' ?
                <Link to='/login'>LogIn</Link>
                :
                <Link to='/login' onClick={this.onClick}>LogOut</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
