import React, {Component} from 'react';
import {Row, Col, Input, Button, Card } from "react-materialize";
import '../public/styles/Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: 'Male',
      weight: '',
      heightFeet: '5',
      heightInches: '5',
      allergies: '',
      medication: '',
      conditions: '',
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
        heightFeet: this.state.heightFeet,
        heightInches: this.state.heightInches,
        allergies: this.state.allergies,
        medication: this.state.medication,
        conditions: this.state.conditions
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      console.log(body);
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
          <Col s={10} m={10} l={10} offset="m1 s1 l1" className="red lighten-2 z-depth-1">
              <h5 className="white-text">Registration</h5>
          </Col>
        </Row>
        <Row>
          <Col s={10} m={8} l={8} offset="m2 s1 l2">
            <Card className="blue-grey lighten-5">
              <form id="register" onSubmit={this.onSubmit} >
            <Row>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Name" type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} />
              </Col>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Email" type="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}  data-error="wrong" data-success="right"/>
              </Col>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Password" type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}/>
              </Col>
              <Col s={12} m={3}>
                <Input s={12} m={12} label="Age" type="number" onChange={(e) => this.setState({age: e.target.value})} value={this.state.age}/>
              </Col>
              <Col s={12} m={3}>
                <Input s={12} m={12} type="select" label="Gender" name="gender" onChange={(e) => this.setState({gender: e.target.value})} value={this.state.gender}>
                  <option value="Male"> Male </option>
                  <option value="Female" disabled selected> Female </option>
                </Input>
              </Col>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Allergies" type="text" onChange={(e) => this.setState({allergies: e.target.value})} value={this.state.allergies} />
              </Col>
              <Col s={12} m={3}>
                <Input s={12} m={12} label="Weight (lbs)" type="number" onChange={(e) => this.setState({weight: e.target.value})} value={this.state.weight}/>
              </Col>
              <Col s={12} m={3}>
                <Input s={6} m={6} label="Height" type="select" onChange={(e) => this.setState({heightFeet: e.target.value})} value={this.state.heightFeet}>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                </Input>
                <Input s={6} m={6} type="select" onChange={(e) => this.setState({heightInches: e.target.value})} value={this.state.heightInches}>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="8"> 8 </option>
                  <option value="9"> 9 </option>
                  <option value="10"> 10 </option>
                  <option value="11"> 11 </option>
                </Input>
              </Col>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Medication" type="text" onChange={(e) => this.setState({medication: e.target.value})} value={this.state.medication} />
              </Col>
              <Col s={12} m={6}>
                <Input s={12} m={12} label="Medical Conditions" type="text" onChange={(e) => this.setState({conditions: e.target.value})} value={this.state.conditions} />
              </Col>
              <Col s={12} m={5} offset="m5">
                <Button waves="light" type="submit" value="Submit" className="red lighten-2 register-btn">Submit</Button>
              </Col>
            </Row>
              </form>
            </Card>
          </Col>
            <div >
              {this.state.reg_error}
            </div>
        </Row>
      </div>
    )
  }
}

export default Register;
