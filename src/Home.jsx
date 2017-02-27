import React, {Component} from 'react';
import { Link } from "react-router";
import Head from "./Head.jsx";
import Torso from "./Torso.jsx";
import './App.css';

import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headComponent: true,
      torsoComponent: false,
   };
  this._onHeadClick = this._onHeadClick.bind(this);
  this._onTorsoClick = this._onTorsoClick.bind(this);
  }

  _onHeadClick() {
    console.log(this.state)
    this.setState({
      headComponent: "sdfsdf",
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

      <div className="home">
        {this.props.children}
        <img src={maleBody}/>
        <Link to="/head"><button onClick={this._onHeadClick}>Head</button></Link>
        {console.log("blah: ", this.state)}
        {this.state.torsoComponent ?
          <Torso /> :
          null
        }
        {this.state.headComponent ? <Head /> : null}
      </div>
    )
  }
}

export default Home;
