import React, {Component} from 'react';
import {Row, Col, Input, Button, Breadcrumb, tbody, Footer, Table, thead, tr, th} from "react-materialize";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    }
  }

  componentDidMount() {

    fetch('http://localhost:4000/profile', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          user: localStorage.getItem('uid')
        })
      }).then((response) => {
        return response.json();
      }).then((body) => {
        console.log(body);
        this.setState({
          profile: body.data
        })
      })
  }

  render() {
    return (
      <div>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
          <Row m={6} >
            <Col m={6} offset="m3" className="z-depth-1">
              <div >About you</div>
              {this.state.profile.map((obj, index ) => {
                return (
                  <Table className="bordered" >
                    <thead>
                      <tr>
                        <th data-field="entry"/>
                        <th data-field="userentry"/>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{obj.name}</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>{obj.age}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{obj.gender}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{obj.height_feet} ft, {obj.height_inches} inches</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{obj.weight}</td>
                      </tr>
                      <tr>
                        <td>Allergies</td>
                        <td>{obj.allergies}</td>
                      </tr>
                      <tr>
                        <td>Prescriptions</td>
                        <td>{obj.medication}</td>
                      </tr>
                      <tr>
                        <td>Medical Conditions</td>
                        <td>{obj.conditions}</td>
                      </tr>
                    </tbody>
                  </Table>
                )
              })}
            </Col>
          </Row>
      </div>
    )
  }
}

export default Profile;

