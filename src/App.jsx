import React, { Component } from 'react';
import '../public/styles/App.css';
// import { Link } from "react-router";

import Nav from './Nav.jsx';
import Foot from './Foot.jsx';
import {Row, Col, Input, Button, Breadcrumb, MenuItem, Modal} from "react-materialize";
import Login from './Login.jsx';
// import Home from './Home.jsx';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        <Button floating fab='vertical' floating icon='list' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
          <Modal
            header='About Us'
            fixedFooter
            trigger={
              <Button floating icon='contacts' className='green'/>
            }>
            Kapish, Steph, Parshant
          </Modal>
          <Modal
            header='Thanks to....'
            fixedFooter
            trigger={
              <Button floating icon='star' className='blue'/>
            }>
            People we wanna thank in here
          </Modal>
        </Button>
      </div>
    );
  }
}

export default App;
