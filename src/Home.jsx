import React, { Component } from 'react';
import { Link } from "react-router";
import $ from 'jquery';
import { Row, Col, Slider, Slide, Card } from "react-materialize";

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
  // bubbleStyle = {
  //   "border": "2px solid #e36352",
  //   "borderRadius": "40px",
  //   "height": "80px",
  //   "width": "80px",
  //   "backgroundColor": "#F7F7F7"
  // }

  constructor(props) {
    super(props);
    this.state = {
      showAboutUs: false,
      lineWidth: 300,
      lineHeight: 575
    };
    this.AboutUs = this.AboutUs.bind(this);
  }

  AboutUs() {
    this.setState({
      showAboutUs: true,
    })
  }

  componentWillMount() {
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    // let legsBubble = document.getElementById('legs-bubble');
    // let rect = legsBubble.getBoundingClientRect();
    // console.log(rect.bottom)

    if (screenWidth === 320) {
      console.log('Setting state at: ', screenWidth);
      this.setState({
        lineWidth: 300,
        lineHeight: 575
      });
    } else if (screenWidth === 375) {
      console.log('Setting state at: ', screenWidth);
      this.setState({
        lineWidth: 355,
        lineHeight: 575
      });
    } else if (screenWidth === 425) {
      this.setState({
        lineWidth: 405,
        lineHeight: 575
      });
    }
  }

  componentDidMount() {
    this.dynamicStyles();

    $(window).resize(this.dynamicStyles);
  }

  componentWillUnmount() {
    $(window).off('resize');
  }


  //function to handle dynamic resizing and setting of css properties
  dynamicStyles() {

    let screenWidth = screen.width;  //used to get actual screen values
    let screenHeight = screen.height;
    let fourLeft = (screenWidth / 2) - 38;
    let fiveLeft = (screenWidth / 2) - 42;
    console.log('Width Data: ', screenWidth, fourLeft);
    console.log('Height Data: ', screenHeight);

    let dashboards = document.getElementsByClassName('dashboard');
    let head = document.getElementById('head-label');
    let torso = document.getElementById('torso-label');
    let arms = document.getElementById('arms-label');
    let legs = document.getElementById('legs-label');

    head.style.left = fourLeft + "px";
    torso.style.left = fiveLeft + "px";
    arms.style.left = fourLeft + "px";
    legs.style.left = fourLeft + "px";


    if (screenWidth < 768) {
      dashboards[0].style.width = (screenWidth - 20) + "px";
      dashboards[0].style.height = (screenHeight - 20) + "px";
    } else if (screenWidth === 768) {
      dashboards[1].style.width = (screenWidth - 20) + "px";
      dashboards[1].style.top = screenHeight / 2 + "px";
      dashboards[1].style.right = ((screenWidth - (screenWidth - 20)) / 2 ) + "px";
    }

    return;
  }

  render () {
    if (localStorage.getItem('uid')) {
      return (
        <div className="home">
          <Row className="hide-on-med-and-up">
            <Col s={12} className="hide-on-med-and-up title-col">
              <Card className="red lighten-2">
                <span className="white-text small-screen-title">Please Select A Body Region</span>
              </Card>
            </Col>
            <Col s={12} className="hide-on-med-and-up region-parts">
              <br></br><br></br><br></br>
              <div className="region">
                <div className="head-label" id="head-label">
                  <span className="w0">H</span>
                  <span className="w1">e</span>
                  <span className="w2">a</span>
                  <span className="w3">d</span>
                </div>
                <Link to="/region/head">
                  <img className="region-bubbles" src={headHead} alt="Head" />
                </Link>
              </div>
              <br></br><br></br>
              <div className="region">
                 <div className="torso-label" id="torso-label">
                  <span className="w0">T</span>
                  <span className="w1">o</span>
                  <span className="w2">r</span>
                  <span className="w3">s</span>
                  <span className="w4">o</span>
                </div>
                <Link to="/region/torso">
                  <img className="region-bubbles" src={torsoMan} alt="Torso" />
                </Link>
              </div>
              <br></br><br></br>
              <div className="region">
                <div className="arms-label" id="arms-label">
                  <span className="w0">A</span>
                  <span className="w1">r</span>
                  <span className="w2">m</span>
                  <span className="w3">s</span>
                </div>
                <Link to="/region/arms">
                  <img className="region-bubbles" src={armsArm} alt="Arms" />
                </Link>
              </div>
              <br></br><br></br>
              <div className="region" id="legs-bubble">
                <div className="legs-label" id="legs-label">
                  <span className="w0">L</span>
                  <span className="w1">e</span>
                  <span className="w2">g</span>
                  <span className="w3">s</span>
                </div>
                <Link to="/region/legs">
                  <img className="region-bubbles" src={legsLeg} alt="Legs" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="dashboard hide-on-med-and-up">
            <Col s={12} className="hide-on-med-and-up">
                <Dashboard width={ this.state.lineWidth } height={ this.state.lineHeight }/>
            </Col>
          </Row>
          <Row>
            <Col m={6} className="hide-on-small-only">
              <br></br><br></br><br></br>
              <img src={maleBody} alt="Body" className="male-body" />
            </Col>
            <Col m={6} className="hide-on-small-only">
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
          <Row className="dashboard">
            <Col m={12} className="hide-on-small-only">
              <Dashboard width={500} height={300} />
            </Col>
          </Row>
        </div>
      );
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
      );
    }
  }
}

export default Home;
