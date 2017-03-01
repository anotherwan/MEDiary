import React, {Component} from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';


// import Tracker from "./Tracker.jsx";

import '../public/styles/head.css'

import BodyParts from './BodyParts.jsx';

import headHead from '../public/images/headHead.svg';
import headBrain from '../public/images/headBrain.svg';
import headEyes from '../public/images/headEyes.svg';
import headNose from '../public/images/headNose.svg';
import headEars from '../public/images/headEar.svg';
import headMouth from '../public/images/headMouth.svg';
import headNeck from '../public/images/headNeck.svg';

class Head extends Component {
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

export default Head;


{/* <div className="head">
  <img src={headHead} role="presentation" height="200" width="200"/>
  <img src={headEyes} role="presentation" height="100" width="100"/>
</div> */}

// import React, {Component} from 'react';
// import { Link } from "react-router";
//
//
//
//
// import Tracker from "./Tracker.jsx";

// class Head extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       eyeImage: false,
//     }
//     this._onEyeClick = this._onEyeClick.bind(this);
//   }
//
//   _onEyeClick() {
//     this.setState({
//       eyeImage: true,
//     })
//   }

//   render () {
//     return (
//       <div className="head">
//         <img src={headHead} role="presentation" height="200" width="200"/>
//         <Link to="/tracker"> <img onClick={this._onEyeClick} src={headEyes} role="presentation" height="100" width="100"/></Link>
//         {this.state.eyeImage && <Tracker />}
//       </div>
//     )
//   }
// }
//
// export default Head;

// let div = new ReactFauxDOM.createElement('div')
//
// let BubbleGraphContainer = d3.select(div)
// .append("svg")
// .attr("height", 480)
// .attr("width", 640)
// .attr("x", 0)
// .attr("y", 0)
// // .attr("viewBox", )
//
// BubbleGraphContainer
// .append("defs")
// .append("symbol")
// .attr("id", "patternFill")
// .append("pattern")
// .attr("id", "headImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "centerHeadBubble")
// .attr("xlink:href", "images/headHead.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "headBubble")
// .attr("cx", 320)
// .attr("cy", 240)
// .attr("r", 40)
// .style("fill", "url(#headImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "brainImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "brainBubble")
// .attr("xlink:href", "images/headBrain.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 320)
// .attr("cy", 120)
// .attr("r", 40)
// .style("fill", "url(#brainImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "eyesImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "eyesBubble")
// .attr("xlink:href", "images/headEyes.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 480)
// .attr("cy", 120)
// .attr("r", 40)
// .style("fill", "url(#eyesImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "noseImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "noseBubble")
// .attr("xlink:href", "images/headNose.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 480)
// .attr("cy", 360)
// .attr("r", 40)
// .style("fill", "url(#noseImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "earsImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "earsBubble")
// .attr("xlink:href", "images/headEar.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 320)
// .attr("cy", 360)
// .attr("r", 40)
// .style("fill", "url(#earsImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "mouthImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "mouthBubble")
// .attr("xlink:href", "images/headMouth.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 160)
// .attr("cy", 360)
// .attr("r", 40)
// .style("fill", "url(#mouthImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// BubbleGraphContainer
// .append("defs")
// .attr("id", "patternFill")
// // .append("symbol")
// // .attr("preserveAspectRatio", )
// .append("pattern")
// .attr("id", "neckImage")
// .attr("x", 0)
// .attr("y", 0)
// .attr("height", 90)
// .attr("width", 90)
// .append("svg:image")
// .attr("class", "neckBubble")
// .attr("xlink:href", "images/headNeck.svg")
// .attr("width", 80)
// .attr("width", 80)
//
// BubbleGraphContainer
// .append("circle")
// .attr("class", "bubble")
// .attr("cx", 160)
// .attr("cy", 120)
// .attr("r", 40)
// .style("fill", "url(#neckImage)")
// .style("stroke", "black")
// .style("stroke-width", 1.5)
//
// return div.toReact()
//
//
//
// let div = new ReactFauxDOM.createElement('div')
//
// let BubbleGraphContainer = d3.select(div)
//   .append("svg")
//     .attr("height", 480)
//     .attr("width", 640)
//     .attr("x", 0)
//     .attr("y", 0)
//
//
// BubbleGraphContainer
//   .append("line")
//     .attr("x1", 320)
//     .attr("y1", 70)
//     .attr("x2", 320)
//     .attr("y2", 120)
//     .style("stroke", "#000000")
//
// BubbleGraphContainer
//   .append("line")
//     .attr("x1", 320)
//     .attr("y1", 260)
//     .attr("x2", 320)
//     .attr("y2", 310)
//     .style("stroke", "#000000")
//
// BubbleGraphContainer
//   .append("line")
//     .attr("x1", 320)
//     .attr("y1", 220)
//     .attr("x2", 320)
//     .attr("y2", 270)
//     .style("stroke", "#000000")
//
//
//
//
//
//
// return div.toReact()
