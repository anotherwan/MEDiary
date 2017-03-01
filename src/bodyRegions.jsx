import React, {Component} from 'react';
import { Link } from "react-router";

import BodyParts from './BodyParts.jsx';

import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import leg from '../public/images/leg.svg';

class Regions extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     eyeImage: false,
  //   }
  //   this._onEyeClick = this._onEyeClick.bind(this);
  // }
  //
  // _onEyeClick() {
  //   this.setState({
  //     eyeImage: true,
  //   })
  // }

  WIDTH = 640
  HEIGHT = 640
  RADIUS = 200

  calculateXPosition = (i, N) => {
    return 0.5 * this.WIDTH + this.RADIUS * Math.cos(i * 2 * Math.PI / N) - 40;
  }

// currently this function is positioning by the center point but you want the top left corner of the box so create a BOX_SIZE var and instead of doing -40, do -this.BOX_SIZE.
  calculateYPosition = (i, N) => {
    return 0.5 * this.WIDTH - this.RADIUS * Math.sin(i * 2 * Math.PI / N) - 40;
  }

  render () {

        return (
          <div className="headBubbles" style={{"position": "relative", "width": "640", "height": "640", "margin-left": "25%"}}>
            <img src={headHead} role="presentation" height="100" width="100" style={{"border": "2px solid black", "border-radius": "50px", "position": "relative", "top": "280px"}} />

            { [0, 1, 2, 3, 4, 5, 6, 7].map((part, i, arr) => {
              return <BodyParts onClick={this._onBrainClick} svgSrc={headBrain} xPosition={this.calculateXPosition(i, arr.length)} yPosition={this.calculateYPosition(i, arr.length)} />
            }) }
          </div>
        )
  }
}

export default Regions;
