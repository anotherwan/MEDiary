import React, { Component } from 'react';
import { Link } from "react-router";
import { Row, Col } from 'react-materialize';

import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';

import '../public/styles/Home.css';

import Login from './Login.jsx';


class Home extends Component {

  bubbleStyle = {
    "border": "2px solid black",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px"
  }

  componentDidMount() {
    window.jQuery('#mainbody').maphilight();
  }

  render () {

    if(localStorage.getItem('uid'))
      return (
        <div className="home">



            <Row style={{'margin':'0px'}}>
                <Col m={4} >
                  <Row></Row>

                <img id="mainbody" src={maleBody} useMap="#body" role="presentation" style={{'height': '380px'}}/>

                <map id="main_body" name="body">
                  <area id="area_head" shape="poly" coords="1,50, 100,161, 100,163, 444,153, 453,155, 457,159, 452,168, 459,174, 455,178, 460,179, 463,193, 460,203, 441,214, 436,217, 458,238, 469,257, 479,267, 478,269, 479,285, 458,309, 436,310, 414,305, 410,323, 397,334, 379,313, 389,316, 401,320, 399,305, 382,300, 371,290,
                  367,296, 366,298, 338,274, 332,272, 300,239, 316,238, 316,234, 313,230, 328,225, 333,213, 338,196, 333,181, 337,166, 345,145" href="#"/>
                </map>
                </Col>
                <Col m={2} className='m5' s={3}>
                  <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Head</h6></div>
                  <Link to="/region/head">
                    <img src={headHead} alt="Head" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Torso</h6></div>
                  <Link to="/region/torso">
                    <img src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Arms</h6></div>
                  <Link to="/region/arms">
                    <img src={armsArm} alt="Arms" style={this.bubbleStyle}/>
                  </Link>
                </Col>
                <Col m={2} className='m5' s={3}>
                  <div style={{'borderBottom':'solid black 2px', 'width': '100px'}}><h6>Legs</h6></div>
                  <Link to="/region/legs">
                    <img src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
                  </Link>
                </Col>
          </Row>
      </div>
    )
    else
      return (
        <Login />
>>>>>>> 95941c9069fa32a69c9682c2037e94354490092c
      )
  }
}

export default Home;


