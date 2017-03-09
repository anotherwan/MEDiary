
import React, {Component} from 'react';
import { Link } from "react-router";
import '../public/styles/BodyRegion.css';

const myStyle = {
  "border": "2px solid #e36352",
  "borderRadius": "40px",
  "position": "absolute",
  "backgroundColor": "#F7F7F7",
  "marginLeft": "25%",
  "marginTop": "1%"
}

const lineStyle = {
  "width": "2px",
  "height": "120px",
  "backgroundColor": "#ef9e8f",
  "position": "absolute",
  "marginLeft": "25%",
  "marginTop": "1%"
}

class BodyParts extends Component {
  HEIGHT = 80
  WIDTH = 80
  TransRotate = 'rotate(' + this.props.rotation + 'deg) translate(0px, 40px)';
  Origin = '0% 0%';

  getStyle = (left, right) => {
    let style = Object.assign({}, myStyle);
    style.left = this.props.xPosition
    style.top = this.props.yPosition
    return style
  }

  getLineStyle = () => {
    let style = Object.assign({}, lineStyle);
    style.left = this.props.xPosition + 40;
    style.top = this.props.yPosition + 40;
    style.transform = this.TransRotate;
    style.transformOrigin = this.Origin;
    return style
  }

  render () {
    if (this.props.isClickable === true && localStorage.getItem('uid')) {
      return (
        <div className="part">
          <Link to={"/tracker/" + this.props.part}>
            <img
              onClick={this.props.onClick}
              src={this.props.svgSrc}
              role="presentation"
              height={this.HEIGHT}
              width={this.WIDTH}
              style={this.getStyle()} />
          </Link>
          <div style={this.getLineStyle()}></div>
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
