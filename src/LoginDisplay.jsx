import React, { Component } from 'react';

class LoginDisplay extends Component {

  render() {
    const user = localStorage.getItem('uid');

    if (user) {
      return (<p> &nbsp;&nbsp;&nbsp;&nbsp; Welcome {user}</p>)
    } else {
      return (<p> &nbsp;&nbsp;&nbsp;&nbsp; Welcome Guest!</p>)
    }
  }
}

export default LoginDisplay;