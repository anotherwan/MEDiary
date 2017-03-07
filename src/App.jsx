import React, { Component } from 'react';
import '../public/styles/App.css';
// import { Link } from "react-router";

import Nav from './Nav.jsx';
import Foot from './Foot.jsx';
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";
import Login from './Login.jsx';
import AboutUs from './AboutUs.jsx';
// import Home from './Home.jsx';

class App extends Component {

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


  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        {this.state.showAboutUs ? <AboutUs /> : null}
        <Button floating fab='vertical' floating icon='list' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
          <Button onClick={this.AboutUs} floating icon='contacts' className='green'/>
          <Button floating icon='star' className='blue'/>
        </Button>
      </div>
    );
  }
}

export default App;
