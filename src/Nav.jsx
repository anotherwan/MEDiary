import React, {Component} from 'react';
import { Link } from "react-router";

class Nav extends Component {


  render () {
    return (
      <nav className="nav">
        <h1> Med-Diary </h1>
        <h4><Link to="/login"><button>LOGIN</button></Link> </h4>
        <h4><Link to="/head"><button >HEAD</button></Link></h4>
      </nav>
    )
// Nav code pliss

  }
}

export default Nav;