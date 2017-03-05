import React, { Component } from 'react';
import { Link } from "react-router";
import {Row, Col } from "react-materialize"
import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';

import Login from './Login.jsx';

import '../public/styles/Home.css';

class Home extends Component {
  bubbleStyle = {
    // "border": "2px solid #b2dfdb",
    // "border": "2px solid #ef9e8f",
    "border": "2px solid #f0bc62",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px",
    "background-color": "#F7F7F7"  }

  render () {
    if (localStorage.getItem('uid')) {
      return (
        <div className="home">
            <Row style={{'margin':'0px'}}>
                <Col m={4} >
                  <Row></Row>
                  <img src={maleBody} alt="Body" style={{'height': '380px'}} />
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Head</h6></div> */}
                  <Link to="/region/head">
                    <img className="region-bubbles" src={headHead} alt="Head" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Torso</h6></div> */}
                  <Link to="/region/torso">
                    <img className="region-bubbles" src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Arms</h6></div> */}
                  <Link to="/region/arms">
                    <img className="region-bubbles" src={armsArm} alt="Arms" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Legs</h6></div> */}
                  <Link to="/region/legs">
                    <img className="region-bubbles" src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
                  </Link>
                </Col>
          </Row>
      </div>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

export default Home;
