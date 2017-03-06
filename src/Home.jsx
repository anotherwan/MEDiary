import React, { Component } from 'react';
import { Link } from "react-router";
import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';
import bandaid from '../public/images/BandaidLogo.svg'
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";

import Login from './Login.jsx';

import '../public/styles/Home.css';
import Foot from './Foot.jsx';

class Home extends Component {
  bubbleStyle = {
    "border": "2px solid #ef9e8f",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px",
    "background-color": "#F7F7F7"
  }

  render () {
    if (localStorage.getItem('uid')) {
      return (
        <div className="home">
          <Row style={{'margin':'0px'}}>
            <Col m={4} offset="m4">
              <Row></Row>
              <img src={maleBody} alt="Body" style={{'height': '380px'}} />
            </Col>
            <Col m={2} offset='m2' s={3}>
            <Row></Row>
              {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Head</h6></div> */}
              <Link to="/region/head">
                <img className="region-bubbles" src={headHead} alt="Head" style={this.bubbleStyle}/>
              </Link>
            </Col>
            <Col m={2} offset='m2' s={3}>
              {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Torso</h6></div> */}
              <Link to="/region/torso">
                <img className="region-bubbles" src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
              </Link>
            </Col>
            <Col m={2} offset='m2' s={3}>
              {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Arms</h6></div> */}
              <Link to="/region/arms">
                <img className="region-bubbles" src={armsArm} alt="Arms" style={this.bubbleStyle}/>
              </Link>
            </Col>
            <Col m={2} offset='m2' s={3}>
              {/* <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Legs</h6></div> */}
              <Link to="/region/legs">
                <img className="region-bubbles" src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
              </Link>
            </Col>
          </Row>
            <Button floating fab='vertical' floating icon='list' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
              <Button floating icon='contacts' className='green'/>
              <Button floating icon='star' className='blue'/>
            </Button>
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
