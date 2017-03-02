// import React, {Component} from 'react';
// import { Link } from "react-router";
//
//
// import headHead from '../public/images/headHead.svg';
// import headEyes from '../public/images/headEyes.svg';
//
//
// import Tracker from "./Tracker.jsx";
//
// class Head extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       eyeImage: false,
//     }
//     this._onEyeClick = this._onEyeClick.bind(this);
//   }
//
//   _onEyeClick() {
//     this.setState({
//       eyeImage: true,
//     })
//   }
//
//   render () {
//     return (
//       <div className="head">
//         <img src={headHead} role="presentation" height="200" width="200"/>
//         <Link to="/tracker"> <img onClick={this._onEyeClick} src={headEyes} role="presentation" height="100" width="100"/></Link>
//         {this.state.eyeImage && <Tracker />}
//       </div>
//     )
//   }
// }
//
// export default Head;
