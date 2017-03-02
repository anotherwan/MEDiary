import React, {Component} from 'react';
import { Link } from "react-router";

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

    return style
  }

  render () {
    return (
      <div>
        <img
            src={this.props.svgRegion}
            role="presentation"
            height={this.HEIGHT}
            width={this.WIDTH}
            style={this.getStyle()} />
        <Link to="/tracker">
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
  }
}

export default BodyParts;
