import React, {Component} from 'react';
import { Link } from "react-router";

// import '../public/styles/BodyParts.css'

const myStyle = {
  "border": "2px solid #b2Dfdb",
  "borderRadius": "40px",
  "position": "absolute"
}

class BodyParts extends Component {
  HEIGHT = 80
  WIDTH = 80

  getStyle = (left, right) => {
    console.log(this.props.location);
    let style = Object.assign({}, myStyle);
    style.left = this.props.xPosition
    style.top = this.props.yPosition

    return style
  }



  render () {
    // if (this.props.isClickable === true && localStorage.getItem('uid'))
      return (
        <div className="parts-container">
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
      // else
      //   return (
      //     <div>
      //       <img
      //         onClick={this.props.onClick}
      //         src={this.props.svgSrc}
      //         role="presentation"
      //         height={this.HEIGHT}
      //         width={this.WIDTH}
      //         style={this.getStyle()} />
      //     </div>
      //     )
  }
}

export default BodyParts;
