import React, { Component } from 'react';
import { Link } from "react-router";
import { Row, Col } from 'react-materialize';


import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';


import Login from './Login.jsx';
import '../public/styles/Home.css'


class Home extends Component {

  bubbleStyle = {
    "border": "2px solid black",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px"
  }

  componentDidMount() {
    window.jQuery('.male-body').maphilight();
  }

  render () {
    if(localStorage.getItem('uid'))
      return (
        <div className="home">
          <map id="main_head" name="body">
            <Row style={{'margin':'0px'}}>
              <Col m={4} >
              <Row></Row>
              <img className="male-body" src={maleBody} useMap="#body" role="presentation"/>
            </Col>
            <Col m={2} className='m5' s={3}>
            <Link to="/region/head">
              <img className="bodypart" src={headHead} alt="Head" style={this.bubbleStyle}/>
              <area id="area_head" shape="poly" coords="230,80,237,71,237,57,234,53,232,47,226,39,227,34,230,33,230,21,233,10,244,1,265,-1,281,13,282,34,284,35,285,41,280,46,276,56,274,60,275,73,281,80" href="#"
                />
            </Link>
            </Col>
            <Col m={2} className='m5' s={3}>
            <Link to="/region/torso">
              <img className="bodypart" src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
              <area id="area_torso" shape="poly" coords="229,81,212,163,214,218,205,243,202,268,204,291,252,293,258,293,306,294,309,269,308,256,297,220,298,177,299,163,281,80,230,79" href="#"/>
            </Link>
            </Col>
            <Col m={2} className='m5' s={3}>
            <Link to="/region/arms">
              <img className="bodypart" src={armsArm} alt="Arms" style={this.bubbleStyle}/>
              <area id="area_arms" shape="poly" coords="330,295,340,301,350,301,362,291,364,273,344,245,341,235,337,198,327,178,324,154,325,111,318,94,303,85,281,80,229,80,199,90,190,100,187,114,187,153,185,170,175,199,171,221,169,242,150,269,147,277,151,279,152,294,163,302,174,301,182,294,182,277,183,253,206,200,207,178,211,163,230,80,281,80,300,161,304,174,308,204,324,240,329,251,328,288,329,292,329,295" href="#"/>
            </Link>
            </Col>
            <Col m={2} className='m5' s={3}>
            <Link to="/region/legs">
              <img className="bodypart" src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
              <area id="area_legs" shape="poly" coords="221,505,221,502,227,487,226,466,210,413,211,396,216,381,212,348,203,290,307,291,300,342,295,380,301,402,295,435,285,469,284,484,292,507,258,504,270,461,268,420,271,394,258,294,253,294,241,383,240,392,243,412,241,446,240,461,251,509" href="#"/>
            </Link>
            </Col>
            </Row>
          </map>
        </div>
      )
      else
        return (
          <Login />
        )
// =======
//   render () {
//     // if (localStorage.getItem('uid')) {
//       return (
//         <div className="home">
//             <Row style={{'margin':'0px'}}>
//                 <Col m={4} >
//                   <Row></Row>
//                   <img src={maleBody} alt="Body" className="male-body" />
//                 </Col>
//                 <Col m={2} className='m5' s={3}>
//                   {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Head</h6></div> */}
//                   <Link to="/region/head">
//                     <img src={headHead} alt="Head" style={this.bubbleStyle}/>
//                   </Link>
//                 </Col>
//                 <Col m={2} className='m5' s={3}>
//                   {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Torso</h6></div> */}
//                   <Link to="/region/torso">
//                     <img src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
//                   </Link>
//                 </Col>
//                 <Col m={2} className='m5' s={3}>
//                   {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Arms</h6></div> */}
//                   <Link to="/region/arms">
//                     <img src={armsArm} alt="Arms" style={this.bubbleStyle}/>
//                   </Link>
//                 </Col>
//                 <Col m={2} className='m5' s={3}>
//                   {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Legs</h6></div> */}
//                   <Link to="/region/legs">
//                     <img src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
//                   </Link>
//                 </Col>
//           </Row>
//       </div>
//       )
//     // } else {
//     //   return null
//     // }
// >>>>>>> 3c74343915b33a6b5e6d82b1c78403ec29c73e4e
  }
}

export default Home;
