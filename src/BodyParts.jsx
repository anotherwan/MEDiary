import React, {Component} from 'react';
import { Link } from "react-router";
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";

const myStyle = {
  "border": "2px solid black",
  "borderRadius": "40px",
  "position": "absolute"
}

class BodyParts extends Component {
  HEIGHT = 80
  WIDTH = 80

  getStyle = (left, right) => {
    let style = Object.assign({}, myStyle);
    style.left = this.props.xPosition
    style.top = this.props.yPosition

    console.log(this.props.part)
    return style
  }

  render () {
    if (this.props.isClickable === true && localStorage.getItem('uid'))
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
        </div>
      )
      else
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

export default BodyParts;
