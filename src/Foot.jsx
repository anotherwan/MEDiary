import React, {Component} from 'react';
import {Row, Col, Input, Button, Breadcrumb, MenuItem, Footer} from "react-materialize";
import { Link } from "react-router";

import '../public/styles/Footer.css'

class Foot extends Component {

  render () {
    return (
      <div className="footer">
        <Footer className="teal lighten-3" copyrights="&copy; 2017 MEDiary">
          Thank you to image peoples
        </Footer>
      </div>
    )
  }
}

export default Foot;
