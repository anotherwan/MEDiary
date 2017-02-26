import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import maleBody from '../public/images/mainBodyGray.svg';


class Home extends Component {

  render () {
    return (
      <div className="home">
        <img src={maleBody}/>
      </div>
    )
  }
}

export default Home;