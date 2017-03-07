import React, { Component } from 'react';
import '../public/styles/App.css';

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
