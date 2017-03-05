import React, {Component} from 'react';
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";
import { Link } from "react-router";

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      reg_error: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      reg_error: ''
    })

    fetch('http://localhost:4000/register', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        gender: this.state.gender,
        weight: this.state.weight,
        height: this.state.height
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      console.log(body.message);
      switch(body.message) {
        case 'Error creating user':
          this.setState({
            reg_error: body.message
          })
          break;
        case 'Email and/or password is empty':
          this.setState({
            reg_error: body.message
          })
          break;
        case 'Invalid email address':
          this.setState({
            reg_error: body.message
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
      <div className="register" >
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
              <MenuItem>Registration</MenuItem>
            </Breadcrumb>
          </Col>
          <form id="register" onSubmit={this.onSubmit} >
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Name" type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} />
              </Col>
            </Row>
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
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Age" type="number" onChange={(e) => this.setState({age: e.target.value})} value={this.state.age}/>
              </Col>
            </Row>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} type='select' label="Gender" name="gender" onChange={(e) => this.setState({gender: e.target.value})} value={this.state.gender}>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </Input>
              </Col>
            </Row>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Weight" type="number" onChange={(e) => this.setState({weight: e.target.value})} value={this.state.weight}/>
              </Col>
            </Row>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Height" type="text" onChange={(e) => this.setState({height: e.target.value})} value={this.state.height}/>
              </Col>
            </Row>
              <Col m={10} offset="m3">
                <Button m={6} waves="light" type="submit" value="Submit">Submit</Button>
              </Col>
          </form>
          <div >
            {this.state.reg_error}
          </div>
        </Row>
      </div>
    )
  }
}

export default Register;
