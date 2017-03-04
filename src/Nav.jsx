import React, {Component} from 'react';
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.onClick = this.handleLogout.bind(this);
  }


  handleLogout = (event) => {
    localStorage.setItem('uid', '');
  }

  render () {
    return (

      <nav className="nav">
        <h1> Med-Diary </h1>
        <h4><Link to="/"><button>HOME</button></Link></h4>
        <h4><Link to="/login"><button>LOGIN</button></Link></h4>
        <h4><Link to="/login" onClick={this.onClick}><button>LOGOUT</button></Link></h4>
        <h4><Link to="/register"><button>Register</button></Link></h4>

      </nav>

    )
  }
}

export default Nav;