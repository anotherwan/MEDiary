import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router";

// Won't run with the following below because we haven't defined them yet

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
