import React, { Component } from 'react';
import {Row, Col, Button, Modal} from "react-materialize";
import steph from '../public/images/steph.jpg';
import parshant from '../public/images/parshant.png';
import kapish from '../public/images/kapish.jpg';

import Nav from './Nav.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        <Button floating fab='vertical' floating icon='list' faicon='fa fa-plus' className='red lighten-1' large style={{bottom: '45px', right: '24px'}}>
          <Modal
            header='About Us'
            fixedFooter
            trigger={
              <Button floating icon='contacts' className='blue lighten-2'/>
            }>
            <Row>
              <Col m={3}>
                <img src={steph} role="presentation" height="180px"/>
              </Col>
              <Col m={3} offset="m1">
                <img src={parshant} role="presentation" height="180px"/>
              </Col>
              <Col m={3} offset="m1">
                <img src={kapish} role="presentation" height="180px"/>
              </Col>
            </Row>
            <Row>
              <Col m={2} offset="m1">
                <h5>Stephanie Wan</h5>
              </Col>
              <Col m={2} offset="m2">
                <h5>Parshant Micoo</h5>
              </Col>
              <Col m={2} offset="m2">
                <h5>Kapish Kochhar</h5>
              </Col>
            </Row>
            <Row>
              <Col m={3} offset="m1">
                <p>Kogi sriracha celiac, hot chicken narwhal lumbersexual chambray chartreuse austin. Yr knausgaard gentrify distillery, air plant neutra literally skateboard.</p>
              </Col>
              <Col m={3} offset="m1">
                <p>Knausgaard chartreuse tacos crucifix. Sartorial +1 chia lumbersexual, banh mi swag artisan kombucha cold-pressed man bun af man braid.</p>
              </Col>
              <Col m={3} offset="m1">
                <p>Everyday carry jean shorts messenger bag locavore, taxidermy kogi quinoa yr franzen before they sold out fanny pack flexitarian fap semiotics. </p>
              </Col>
            </Row>
          </Modal>
          <Modal
            header='Special Thanks To...'
            fixedFooter
            trigger={
              <Button floating icon='star' className='amber accent-4'/>
            }>
            <h5>All of Lighthouse Labs mentors and staff!</h5>
            <p>All icons and images made by Freepik from www.flaticon.com</p>
          </Modal>
        </Button>
      </div>
    );
  }
}

export default App;
