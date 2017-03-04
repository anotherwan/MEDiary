import React, {Component} from 'react';

import BodyParts from './BodyParts.jsx';
import obj from '../obj.json';


class BodyRegions extends Component {


  WIDTH = 640
  HEIGHT = 640
  RADIUS = 200

  calculateXPosition = (i, N) => {
    return 0.5 * this.WIDTH + this.RADIUS * Math.cos(i * 2 * Math.PI / N) - 40;
  }

  calculateYPosition = (i, N) => {

    return 0.5 * this.WIDTH - this.RADIUS * Math.sin(i * 2 * Math.PI / N) - 40;
  }


  render () {
    if(localStorage.getItem('uid'))
      switch(this.props.location.pathname) {
        case "/region/head":
          return (
            <div>
            {
              Object.keys(obj['body']).map((region) => {
                return <BodyParts
                  isClickable={false}
                  svgSrc={obj['body']['head'].img_path}
                  role="presentation"
                  height="100px"
                  width="100px"
                  style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />
              })}
            {
              Object.keys(obj['body']['head']['parts']).map((part, i, arr) => {
                return <BodyParts
                  isClickable={true}
                  part={obj['body']['head']['parts'][part].id}
                  onClick={this.onClick}
                  svgSrc={obj['body']['head']['parts'][part].img_path}
                  xPosition={this.calculateXPosition(i, arr.length)}
                  yPosition={this.calculateYPosition(i, arr.length)} />
              })}
            </div>
          )
          break;
        case "/region/torso":
          return (
            <div>
            {
              Object.keys(obj['body']).map((region, i, arr) => {
                return <BodyParts
                  isClickable={false}
                  svgSrc={obj['body']['torso'].img_path}
                  role="presentation"
                  height="100px"
                  width="100px"
                  style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />
            })}
            {
              Object.keys(obj['body']['torso']['parts']).map((part, i, arr) => {
                return <BodyParts
                  isClickable={true}
                  part={obj['body']['torso']['parts'][part].id}
                  onClick={this.onClick}
                  svgSrc={obj['body']['torso']['parts'][part].img_path}
                  xPosition={this.calculateXPosition(i, arr.length)}
                  yPosition={this.calculateYPosition(i, arr.length)} />
              })}
              </div>
            )
            break;
        case "/region/legs":
          return (
            <div>
            {
              Object.keys(obj['body']).map((region, i, arr) => {
                return <BodyParts
                  isClickable={false}
                  svgSrc={obj['body']['legs'].img_path}
                  role="presentation"
                  height="100px"
                  width="100px"
                  style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />
            })}
            {
              Object.keys(obj['body']['legs']['parts']).map((part, i, arr) => {
                return <BodyParts
                  isClickable={true}
                  part={obj['body']['legs']['parts'][part].id}
                  onClick={this.onClick}
                  svgSrc={obj['body']['legs']['parts'][part].img_path}
                  xPosition={this.calculateXPosition(i, arr.length)}
                  yPosition={this.calculateYPosition(i, arr.length)} />
              })}
              </div>
            )
            break;
        case "/region/arms":
          return (
            <div>
            {
              Object.keys(obj['body']).map((region, i, arr) => {
                return <BodyParts
                  isClickable={false}
                  svgSrc={obj['body']['arms'].img_path}
                  role="presentation"
                  height="100px"
                  width="100px"
                  style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}} />
            })}
            {
              Object.keys(obj['body']['arms']['parts']).map((part, i, arr) => {
                return <BodyParts
                  isClickable={true}
                  part={obj['body']['arms']['parts'][part].id}
                  onClick={this.onClick}
                  svgSrc={obj['body']['arms']['parts'][part].img_path}
                  xPosition={this.calculateXPosition(i, arr.length)}
                  yPosition={this.calculateYPosition(i, arr.length)} />
              })}
              </div>
            )
            break;
            default:
              console.log("Nothing working")
    }
  }
}

export default BodyRegions;