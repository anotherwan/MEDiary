import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Won't run with the following below because we haven't defined them yet
import Nav from './Nav.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';



class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bodyImage: "test" // picture of body here
  //   };
  //   this.post = this.post.bind(this)
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
