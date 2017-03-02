<<<<<<< HEAD
// import React, {Component} from 'react';
//
// class Torso extends Component {
//
//   render () {
//     return (
//       <div className="torso">
//
//       </div>
//     )
//   }
// }
//
// export default Torso;
=======
import React, {Component} from 'react';
import torsoMan from '../public/images/torsoMan.svg';
import torsoHeart from '../public/images/torsoHeart.svg';

class Torso extends Component {

  render () {
    return (
      <div className="torso">
        <img src={torsoMan} role="presentation" height="200" width="200"/>
        <img src={torsoHeart} role="presentation" height="100" width="100"/>
      </div>
    )
  }
}

export default Torso;
>>>>>>> 1be053e2e34c9b7fe0eef8230d7c49f67ed65f3a
