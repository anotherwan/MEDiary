import React, { Component } from 'react';

class LoginDisplay extends Component {

  render() {
    const user = localStorage.getItem('uid');

    if (user) {
      return (<p style={{"color": "white"}}> &nbsp;&nbsp;&nbsp;&nbsp; Welcome {user}</p>)
    } else {
      return (<p style={{"color": "white"}}> &nbsp;&nbsp;&nbsp;&nbsp; Welcome Guest!</p>)
    }
  }
}

export default LoginDisplay;
