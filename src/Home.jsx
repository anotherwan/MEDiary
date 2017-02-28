import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';

import './App.css';
import maleBody from '../public/images/mainBodyGray.svg';
import head from '../public/images/headHead.svg';
import torso from '../public/images/torsoMan.svg';
import arms from '../public/images/armsArm.svg';
import legs from '../public/images/leg.svg';




class Home extends Component {
  show = (ele) => {
    ele.style.opacity = 1
  }

  hide = (ele) => {
    ele.style.opacity = 0
  }

  render () {

    let style = {position: "absolute", top: 0, left: 1, width: 512, height: 512, opacity: 0}
    return(
      <div style={{position: "relative", textAlign: "left"}}>

        <img src="/images/mainBodyGray.svg" />

        <img src="/images/head.svg" style={style} ref={(ele) => this.head = ele}/>
        <img src="/images/leftarm.svg" useMap="body-map" style={style} ref={(ele) => this.leftArm = ele} />
        <img src="/images/rightarm.svg" useMap="body-map" style={style} ref={(ele) => this.rightArm = ele}/>
        <img src="/images/torso.svg" useMap="body-map" style={style} ref={(ele) => this.torso = ele}/>
        <img src="/images/leftleg.svg" useMap="body-map" style={style} ref={(ele) => this.leftLeg = ele}/>
        <img src="/images/leftleg.svg" useMap="body-map" style={style} ref={(ele) => this.leftLeg = ele}/>
        {/* <img src="/images/rightleg.svg" useMap="body-map" style={{position: "absolute", top: 0, left: 0, width: 512, height: 512}} /> */}

        <map name="body-map">
          <area
            shape="poly" alt="" title=""
            coords="230,80,237,71,237,57,234,53,232,47,226,39,227,34,230,33,230,21,233,10,244,1,265,-1,281,13,282,34,284,35,285,41,280,46,276,56,274,60,275,73,281,80"
            href="" target=""
            onMouseEnter={e => this.show(this.head)}
            onMouseLeave={e => this.hide(this.head)} />
          <area
            shape="poly" alt="" title=""
            coords="229,81,212,163,214,218,205,243,202,268,204,291,252,293,258,293,306,294,309,269,308,256,297,220,298,177,299,163,281,80,230,79"
            href="" target=""
            onMouseEnter={e => this.show(this.torso)}
            onMouseLeave={e => this.hide(this.torso)} />
          <area
            shape="poly" alt="" title=""
            coords="330,295,340,301,350,301,362,291,364,273,344,245,341,235,337,198,327,178,324,154,325,111,318,94,303,85,281,80,229,80,199,90,190,100,187,114,187,153,185,170,175,199,171,221,169,242,150,269,147,277,151,279,152,294,163,302,174,301,182,294,182,277,183,253,206,200,207,178,211,163,230,80,281,80,300,161,304,174,308,204,324,240,329,251,328,288,329,292,329,295"
            href="" target=""
            onMouseEnter={e => this.show(this.leftArm)}
            onMouseLeave={e => this.hide(this.leftArm)}
            onMouseEnter={e => this.show(this.rightArm)}
            onMouseLeave={e => this.hide(this.rightArm)} />
          <area
            shape="poly" alt="" title=""
            coords="221,505,221,502,227,487,226,466,210,413,211,396,216,381,212,348,203,290,307,291,300,342,295,380,301,402,295,435,285,469,284,484,292,507,258,504,270,461,268,420,271,394,258,294,253,294,241,383,240,392,243,412,241,446,240,461,251,509"
            href="" target=""
            onMouseEnter={e => this.show(this.leftLeg)}
            onMouseLeave={e => this.hide(this.leftLeg)}
            onMouseEnter={e => this.show(this.rightLeg)}
            onMouseLeave={e => this.hide(this.rightLeg)} />
        </map>
      </div>

    );
  }
}

export default Home;

// <!-- Created by Online Image Map Editor (http://www.maschek.hu/imagemap/index) -->

{/* <div style={{ height: '100%', width: '100%' }}>
  <img src="/images/mainBodyGray.svg" useMap="body-map" />
  <map name="body-map">
    <area
      shape="poly" alt=""
      title=""
      style={{'border': '2px solid red'}}
      coords="284,87,380,291,327,313,315,267,313,246"
      href="" target=""
      onMouseOver={() => console.log('test')} />
  </map>
</div> */}

// let Foo = props => {
//   let bubble = new ReactFauxDOM.createElement('div');
//
//   return bubble.toReact()
// }
//
// <Foo />

// const div = new ReactFauxDOM.createElement('div');
//
// const mainBodySVG = d3.select(div)
//   .append("svg")
//   .attr("height", "600")
//   .attr("width", "500")
//   .attr("x", 0)
//   .attr("y", 0)
//
// mainBodySVG.append("svg:image")
//   .attr("class", "maleBody")
//   .attr("xlink:href", "images/mainBodyGray.svg")
//   .attr("width", 400)
//   .attr("height", 500)
//
// mainBodySVG.append("defs")
//   .append ()
//
//   // .attr("viewBox", "800 800")
//   // .attr("preserveAspectRatio", "xMinYMin meet")
//   // .append("svg:image")
//   // .attr("height", 400)
//   // .attr("x", 0)
//   // .attr("y", 0);
//
// const dashboard = d3.select(div)
//   .append("svg")
//   .attr("height", "600")
//   .attr("width", "500")
//   .attr("x", 500)
//   .attr("y", 0)




// mainBodySVG.append("circle")
//   .attr("cx", 400)
//   .attr("cy", 36)
//   .attr("r", 35)
//   .style("stroke", "black")
//   .style("stroke-width", 1.5)
//   .style("fill", "transparent")
