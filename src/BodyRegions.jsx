import React, {Component} from 'react';
import { Link } from "react-router";

import BodyParts from './BodyParts.jsx';
import obj from '../obj.json';

import headHead from '../public/images/headHead.svg';

class BodyRegions extends Component {
  WIDTH = 640
  HEIGHT = 640
  RADIUS = 200

  calculateXPosition = (i, N) => {
    return 0.5 * this.WIDTH + this.RADIUS * Math.cos(i * 2 * Math.PI / N) - 40;
  }

//currently this function is positioning by the center point but you want the top left corner of the box so create a BOX_SIZE var and instead of doing -40, do -this.BOX_SIZE.

  calculateYPosition = (i, N) => {
    return 0.5 * this.WIDTH - this.RADIUS * Math.sin(i * 2 * Math.PI / N) - 40;
  }

  render () {
        return (
          <div>
          <div className="Bubbles" style={{"position": "relative", "width": "640px", "height": "640px", "marginLeft": "25%"}}>

            <img src={headHead} role="presentation" height="100px" width="100px" style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />

            {/* {Object.keys(obj).map(()=>{
              return <BodyParts regionSvg={obj.img_path} style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />
              })
            } */}

            {
              Object.keys(obj['head']['parts']).map((part, i, arr) => {
                return <BodyParts onClick={this._onClick} svgSrc={obj['head']['parts'][part].img_path} xPosition={this.calculateXPosition(i, arr.length)} yPosition={this.calculateYPosition(i, arr.length)} />
              })
            }

          </div>
          <div>
            {this.props.params && this.props.params.part}
            <Link to="/region/part">
              <img onClick={this.props.onClick} role="presentation" src={this.props.svgSrc}/>
            </Link>
          </div>
        </div>
        )
  }
}

export default BodyRegions;
