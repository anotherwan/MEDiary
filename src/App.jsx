import React, { Component } from 'react';
import {Button, Modal} from "react-materialize";
import steph from '../public/images/steph.jpg';
import parshant from '../public/images/parshant.png';
import kapish from '../public/images/kapish.jpg';

import '../public/styles/App.css';
import Nav from './Nav.jsx';

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
            <div>
              <img src={steph} height="180"/> <p>Stephanie Wan</p>
              <img src={parshant} height="180"/> <p> Parshant Micoo </p>
              <img src={kapish} height="180"/> <p> Kapish Kochhar </p>
            </div>
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
