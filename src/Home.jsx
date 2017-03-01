import React, { Component } from 'react';
import { Link } from "react-router";
import Head from "./Head.jsx";
import Torso from "./Torso.jsx";
// import '../public/styles/App.css';

import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import leg from '../public/images/leg.svg';


class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     headComponent: false,
  //     torsoComponent: false,
  //   };
  //   this._onHeadClick = this._onHeadClick.bind(this);
  //   this._onTorsoClick = this._onTorsoClick.bind(this);
  // }
  //
  // _onHeadClick() {
  //   console.log("test:", this.state)
  //   this.setState({
  //     headComponent: true,
  //     torsoComponent: false,
  //   });
  //   console.log(this.state)
  // }
  //
  // _onTorsoClick() {
  //   this.setState({
  //     headComponent: false,
  //     torsoComponent: true,
  //   });
  // }
  bubbleStyle = {
    "border": "2px solid black",
    "border-radius": "40",
    "height": "80",
    "width": "80"
  }

  render () {
    return (

      <div className="home">
        <img src={maleBody} style={{}} />
        <img src={headHead} style={this.bubbleStyle}/>
        <img src={torsoMan} style={this.bubbleStyle}/>
        <img src={armsArm} style={this.bubbleStyle}/>
        <img src={leg} style={this.bubbleStyle}/>
      </div>
    )
  }
}

export default Home;

// {/* <Link to="/head"><img onClick={this._onHeadClick} src={headHead} role="presentation" height="200" width="200"/> </Link> */}
// {/* <Link to="/torso"><img onClick={this._onTorsoClick} src={torsoMan} role="presentation" height="200" width="100"/> </Link> */}
// {/* {console.log("blah: ", this.state)} */}
// {/* {this.state.torsoComponent ? */}
// {/* <Torso /> : */}
// {/* null */}
// {/* } */}
// {/* {this.state.headComponent ? <Head /> : null} */}
