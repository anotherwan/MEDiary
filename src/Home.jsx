import React, { Component } from 'react';
import { Link } from "react-router";
import {Row, Col, Slider, Slide } from "react-materialize"
import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';

import torsoPain from '../public/images/torsoPain.svg';
import visual2 from '../public/images/visual2.svg';
import doctor8 from '../public/images/doctor8.svg';
import better3 from '../public/images/better3.svg';

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
          <Row>
            <Col m={3} offset="m1">
              <br></br><br></br><br></br>
              <img src={maleBody} alt="Body" style={{'height': '380px'}} />
            </Col>
          </Row>
          <Row>
            <Col m={4}>
              <br></br><br></br><br></br>
              <Link to="/region/head">
                <img className="region-bubbles" src={headHead} alt="Head" style={this.bubbleStyle}/>
              </Link>

              <br></br><br></br>
              <Link to="/region/torso">
                <img className="region-bubbles" src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
              </Link>

              <br></br><br></br>
              <Link to="/region/arms">
                <img className="region-bubbles" src={armsArm} alt="Arms" style={this.bubbleStyle}/>
              </Link>

              <br></br><br></br>
              <Link to="/region/legs">
                <img className="region-bubbles" src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col m={4}>
              <br></br><br></br><br></br>
              <div style={{'borderBottom':'solid black 2px', 'width': '60px'}}><h6>Head</h6></div>

              <br></br><br></br><br></br>
              <div style={{'borderBottom':'solid black 2px', 'width': '60px'}}><h6>Torso</h6></div>

              <br></br><br></br><br></br>
              <div style={{'borderBottom':'solid black 2px', 'width': '60px'}}><h6>Arms</h6></div>

              <br></br><br></br><br></br><br></br>
              <div style={{'borderBottom':'solid black 2px', 'width': '60px'}}><h6>Legs</h6></div>
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <div>
          <br></br><br></br><br></br><br></br><br></br>
            <Slider>
              <Slide
                placement="right"
                src={torsoPain}
                title="Track Your Pains">
                Along With Everything Else
              </Slide>
              <Slide
                src={visual2}
                alignment="left"
                title="Record Your Pains">
                In Three Easy Steps
              </Slide>
              <Slide
                src={doctor8}
                alignment="left"
                title="Share">
                With Doctors
              </Slide>
              <Slide
                src={better3}
                title="So You Can Enjoy The Better Things"
                alignment="center">
              </Slide>
            </Slider>
        </div>
      )
    }
  }
}

export default Home;
