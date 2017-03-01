import React, {Component} from 'react';
import { Link } from "react-router";

import torsoMan from '../public/images/torsoMan.svg';
import headHead from '../public/images/headHead.svg';
import maleBody from '../public/images/mainBodyGray.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/leg.svg';

import BodyParts from './BodyParts.jsx';
import Tracker from './Tracker.jsx';


class BodyRegions extends Component {
  bubbleStyle = {
    "border": "2px solid black",
    "border-radius": "40",
    "height": "80",
    "width": "80"
  }

  render () {
    return (
      <div>
        <img src={maleBody} style={{}} />
        <Link to="/region/head">
          <img src={this.props.svgHead} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/torso">
          <img src={this.props.svgTorso} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/arms">
          <img src={this.props.svgArms} style={this.bubbleStyle}/>
        </Link>
        <Link to="/region/legs">
          <img src={this.props.svgLegs} style={this.bubbleStyle}/>
        </Link>
      </div>
    )
  }
}

export default BodyRegions;