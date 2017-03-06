import React, { Component } from 'react';
import '../public/styles/App.css';
// import { Link } from "react-router";

import Nav from './Nav.jsx';
import Foot from './Foot.jsx';
// import Home from './Home.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
