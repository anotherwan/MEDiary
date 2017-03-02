import React, {Component} from 'react';
import { Link } from "react-router";

import BodyParts from './BodyParts.jsx';
import BodyRegions from './BodyRegions.jsx';
import Tracker from './Tracker.jsx';

import torsoMan from '../public/images/torsoMan.svg';
import headHead from '../public/images/headHead.svg';
import maleBody from '../public/images/mainBodyGray.svg';
import armsArm from '../public/images/armsArm.svg';
import leg from '../public/images/leg.svg';

class Home extends Component {
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
        <Link to="/region/head">
          <img src={headHead} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/torso">
          <img src={torsoMan} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/arms">
          <img src={armsArm} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/leg">
          <img src={leg} style={this.bubbleStyle}/>
        </Link>
      </div>
    )
  }
}

export default Home;
