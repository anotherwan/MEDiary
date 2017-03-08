import React, {Component} from 'react';
import {Row, Col, Input, Button, Card} from "react-materialize";

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
        <br></br><br></br><br></br><br></br>
        <Row>
          <Col m={10} offset="m1" className="red lighten-2 z-depth-1">
              <h5 className="white-text">Login</h5>
          </Col>
        </Row>
        <Row>
          <Col m={8} offset="m2">
            <Card className="blue-grey lighten-5">
              <form id="login" onSubmit={this.onSubmit}>
                <Row></Row>
                <Row>
                  <Col m={8} offset="m2">
                    <Input m={12} label="Email" type="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
                  </Col>
                </Row>
                <Row></Row>
                <Row>
                  <Col m={8} offset="m2">
                    <Input m={12} label="Password" type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}/>
                  </Col>
                </Row>
                <Row>
                  <Col m={5} offset="m5">
                    <Button waves="light" type="submit" value="Submit" className="red lighten-2">Submit</Button>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
          <div >
            {this.state.login_error}
          </div>
      </div>
    )
  }
}

export default Login;
