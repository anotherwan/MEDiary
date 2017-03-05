import React, {Component} from 'react';
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";
import { Link } from "react-router";

import "../public/styles/Nav.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login_error: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      login_error: ''
    })

    fetch('http://localhost:4000/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      switch(body.message) {
        case 'User not found':
          this.setState({
            login_error: body.message
          })
          break;
        case 'Email and/or password cannot be empty':
          this.setState({
            login_error: body.message
          })
          break;
        case 'Invalid email and/or password':
          this.setState({
            login_error: body.message
          })
          break;
        default: {
          localStorage.setItem('uid', body.message);
          this.props.router.push('/');
        }
      }
    })
  }
  render () {
    return (
      <div className="login" >
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
        <Row>
          <Col m={12}>
            <Breadcrumb class="teal lighten-2">
              <Link to="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <MenuItem>Login</MenuItem>
            </Breadcrumb>
          </Col>
          <form id="login" onSubmit={this.onSubmit}>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Email" type="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
              </Col>
            </Row>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Password" type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}/>
              </Col>
            </Row>
              <Col m={10} offset="m3">
                <Button m={6} waves="light" type="submit" value="Submit">Submit</Button>
              </Col>
          </form>
          <div >
            {this.state.login_error}
          </div>
        </Row>
      </div>
    )
  }
}

export default Login;