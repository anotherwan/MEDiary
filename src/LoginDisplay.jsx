import React, { Component } from 'react';
import { Link } from 'react-router';

class LoginDisplay extends Component {

  render() {
    const user = localStorage.getItem('uid');

    if (user) {
      return (<p> &nbsp;&nbsp;&nbsp;&nbsp; Welcome {user}</p>)
    } else {
      return (<Link to='/login'>LogIn</Link>)
    }
  }
}

export default LoginDisplay;