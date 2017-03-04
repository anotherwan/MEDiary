import React, {Component} from 'react';
import { Link } from "react-router";
import { Modal } from 'react-materialize';

import medProfile from '../public/images/medProfile.svg'
import bandaid from '../public/images/BandaidLogo.svg'

import Register from "./Register"
import Login from "./Login"

import "../public/styles/Nav.css"

class Nav extends Component {

  handleLogout = (event) => {
    localStorage.setItem('uid', '');
  }

  render() {
    return (

      <div className="navbar fixed-top">
        <div className="logo-container">
          <img src={bandaid} alt="bandaid" />
            <h5>MEDiary</h5>
        </div>
        <div className="nav-list-wrapper">
          <ul className="nav-list">
            <li>
              <Modal
                header='Register'
                fixedFooter
                trigger={
                  <Link to='/register'>Registration</Link>
                }>
                <Register />
              </Modal>
            </li>
            <li>
              <Modal
                header='Login'
                fixedFooter
                trigger={
                  <Link to='/login'>Login</Link>
                }>
                <Login />
              </Modal>
            </li>
            <li>
              <img src={medProfile} alt="Profile" />
              <h6>Profile</h6>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;