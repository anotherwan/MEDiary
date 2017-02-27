import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';

import './App.css';
import maleBody from '../public/images/mainBodyGray.svg';
import head from '../public/images/headHead.svg';
import torso from '../public/images/torsoMan.svg';
import arms from '../public/images/armsArm.svg';
import legs from '../public/images/leg.svg';


class Home extends Component {
  render () {
    const div = new ReactFauxDOM.createElement('div');

    const mainBodySVG = d3.select(div)
      .append("svg")
      .attr("height", "600")
      .attr("width", "500")
      .attr("x", 0)
      .attr("y", 0)

    mainBodySVG.append("svg:image")
      .attr("class", "maleBody")
      .attr("xlink:href", "images/mainBodyGray.svg")
      .attr("width", 400)
      .attr("height", 500)

    mainBodySVG.append("defs")
      .append ()

      // .attr("viewBox", "800 800")
      // .attr("preserveAspectRatio", "xMinYMin meet")
      // .append("svg:image")
      // .attr("height", 400)
      // .attr("x", 0)
      // .attr("y", 0);

    const dashboard = d3.select(div)
      .append("svg")
      .attr("height", "600")
      .attr("width", "500")
      .attr("x", 500)
      .attr("y", 0)




    // svgBody.append("circle")
    //   .attr("cx", 400)
    //   .attr("cy", 36)
    //   .attr("r", 35)
    //   .style("stroke", "black")
    //   .style("stroke-width", 1.5)
    //   .style("fill", "transparent")



    return div.toReact()




    // return (
    //   <div className="home">
    //     <img src={maleBody}/>
    //     <img src={head}/>
    //     <img src={torso}/>
    //     <img src={arms}/>
    //     <img src={legs}/>
    //   </div>
    // )
  }
}

export default Home;
