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

  render () {
    // if (localStorage.getItem('uid')) {
      return (
        <div className="home">
            <Row style={{'margin':'0px'}}>
                <Col m={4} >
                  <Row></Row>
                  <img src={maleBody} alt="Body" className="male-body" />
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Head</h6></div> */}
                  <Link to="/region/head">
                    <img src={headHead} alt="Head" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Torso</h6></div> */}
                  <Link to="/region/torso">
                    <img src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Arms</h6></div> */}
                  <Link to="/region/arms">
                    <img src={armsArm} alt="Arms" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Legs</h6></div> */}
                  <Link to="/region/legs">
                    <img src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
                  </Link>
                </Col>
          </Row>
      </div>
      )
    // } else {
    //   return null
    // }
  }
}

export default Home;
