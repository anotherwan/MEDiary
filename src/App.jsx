import React, { Component } from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';


import '../public/styles/App.css';

import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';


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
