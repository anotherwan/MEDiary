import React, {Component} from 'react';
import { Link } from "react-router";

import BodyParts from './BodyParts.jsx';
import BodyRegions from './BodyRegions.jsx';
import Tracker from './Tracker.jsx';


import torsoMan from '../public/images/torsoMan.svg';
import headHead from '../public/images/headHead.svg';
import maleBody from '../public/images/mainBodyGray.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/leg.svg';


class Home extends Component {

  render () {

    return (
      <div className="home" >
        <BodyRegions svgHead={headHead} svgTorso={torsoMan} svgArms={armsArm} svgLegs={legsLeg}/>
        <BodyParts />
        <Tracker />
      </div>

    )
  }
}

export default Home;