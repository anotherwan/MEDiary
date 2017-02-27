import React, {Component} from 'react';
import { Link } from "react-router";
import Head from "./Head.jsx";
import Torso from "./Torso.jsx";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headComponent: false,
      torsoComponent: false,
    };
    this._onHeadClick = this._onHeadClick.bind(this);
    this._onTorsoClick = this._onTorsoClick.bind(this);
  }

  _onHeadClick() {
    console.log(this.state)
    this.setState({
      headComponent: true,
      torsoComponent: false,
    });
    console.log(this.state)
  }

  _onTorsoClick() {
    this.setState({
      headComponent: false,
      torsoComponent: true,
    });
  }

  render () {
    return (

      <nav className="nav">
        <h1> Med-Diary </h1>
        <h4><Link to="/"><button>HOME</button></Link></h4>
        <h4><Link to="/login"><button>LOGIN</button></Link> </h4>
        <h4><Link to="/register"><button>Register</button></Link></h4>
        <h4><Link to="/torso"><button onClick={this._onTorsoClick}>TORSO</button></Link></h4>
        <h4><Link to="/head"><button onClick={this._onHeadClick}>yyy</button></Link></h4>
        {console.log("nav: ", this.state)}
        {this.state.torsoComponent ?
          <Torso /> :
          null
        }
        {this.state.headComponent ?
          <Head /> :
          null
        }
      </nav>

    )
  }
}

export default Nav;
