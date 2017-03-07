import React, { Component } from 'react';
import {Button, Modal} from "react-materialize";

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
