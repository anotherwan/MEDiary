import React, {Component} from 'react';
import headHead from '../public/images/headHead.svg';
import headEyes from '../public/images/headEyes.svg';

class Head extends Component {

  render () {
    return (
      <div className="head">
        <img src={headHead} role="presentation" height="200" width="200"/>
        <img src={headEyes} role="presentation" height="100" width="100"/>
      </div>
    )
  }
}

export default Head;