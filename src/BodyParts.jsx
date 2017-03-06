import React, {Component} from 'react';
import { Link } from "react-router";

const myStyle = {
  "border": "2px solid black",
  "borderRadius": "40px",
  "position": "absolute"
}

const divStyle = {
  "width": "2px",
  "height": "120px",
  "backgroundColor": "black",
  "position": "absolute",
  "margin": "0 0"
}

class BodyParts extends Component {
  HEIGHT = 80
  WIDTH = 80
  TransRotate = 'rotate(' + this.props.rotation + 'deg) translate(0px, 40px)';
  Origin = '0% 0%';

  getStyle = (left, right) => {
    console.log(this.props.location);
    let style = Object.assign({}, myStyle);
    style.left = this.props.xPosition
    style.top = this.props.yPosition
    return style
  }

  getDivStyle = () => {
    let style = Object.assign({}, divStyle);
    style.left = this.props.xPosition + 40;
    style.top = this.props.yPosition + 40;
    style.transform = this.TransRotate;
    style.transformOrigin = this.Origin;
    return style
  }

  render () {
    if (this.props.isClickable === true && localStorage.getItem('uid')) {
      return (
        <div>
          <Link to={"/tracker/" + this.props.part}>
            <img
              onClick={this.props.onClick}
              src={this.props.svgSrc}
              role="presentation"
              height={this.HEIGHT}
              width={this.WIDTH}
              style={this.getStyle()} />
          </Link>
          <div style={this.getDivStyle()}></div>
        </div>
      )
      } else {
        return (
          <div>
            <img
              onClick={this.props.onClick}
              src={this.props.svgSrc}
              role="presentation"
              height={this.HEIGHT}
              width={this.WIDTH}
              style={this.getStyle()} />
          </div>
        )
      }
  }
}

export default BodyParts;
