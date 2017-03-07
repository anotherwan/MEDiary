import React, { Component } from 'react';
import { Link } from "react-router";
import {Row, Col, Button, Slider, Slide } from "react-materialize"
import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';
import anklePain from '../public/images/anklepain.jpg';
import docPat from '../public/images/doctorpatient.jpg';

import Dashboard from './Dashboard.jsx';
import '../public/styles/Home.css'

class Home extends Component {
  bubbleStyle = {
    "border": "2px solid #e36352",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px",
    "backgroundColor": "#F7F7F7"
  }

  constructor(props) {
    super(props);
    this.state = {
      showAboutUs: false,
    };
    this.AboutUs = this.AboutUs.bind(this);
  }

  AboutUs () {
    this.setState({
      showAboutUs: true,
    })
  }

  render () {
    if (localStorage.getItem('uid')) {
      return (
        <div className="home">
          <Dashboard />
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
        </div>
      )
    } else {
      return (
        <div>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
            <Slider>
              <Slide
                placement="left"
                src={anklePain}
                title="Record Your Pain">
                In Three Easy Steps
              </Slide>
              <Slide
                src="http://www.myelomacrowd.org/wp-content/uploads/2015/04/photodune-10386015-happy-male-doctor-discussing-with-senior-patient-at-table-in-clinic-l.jpg"
                className="black"
                title="Communicate Easier and Faster"
                placement="left">
              </Slide>
              <Slide
                src="http://www.crimsondoorhealing.com/wp-content/uploads/2016/10/WomanJumpingSunset-Kcopy.jpg"
                title="So You Can Enjoy The Better Things"
                placement="right">
              </Slide>
            </Slider>
        </div>
      )
    }
  }
}

export default Home;
