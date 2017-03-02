import React, {Component} from 'react';
import { Link } from "react-router";
import torsoMan from '../public/images/torsoMan.svg';
import headHead from '../public/images/headHead.svg';
import maleBody from '../public/images/mainBodyGray.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/leg.svg';


import Tracker from './Tracker.jsx';
import obj from '../obj.json';


class BodyParts extends Component {

  WIDTH = 640
  HEIGHT = 640
  RADIUS = 200

  calculateXPosition = (i, N) => {
    return 0.5 * this.WIDTH + this.RADIUS * Math.cos(i * 2 * Math.PI / N) - 40;
  }

  calculateYPosition = (i, N) => {
    return 0.5 * this.WIDTH - this.RADIUS * Math.sin(i * 2 * Math.PI / N) - 40;
}


  render () {

    return (
       <div>
       TETS


      </div>
    )
  }
}

export default BodyParts;