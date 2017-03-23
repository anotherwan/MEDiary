import React, {Component} from 'react';
import {Row, Col, Collapsible, CollapsibleItem, Icon, Button, Modal} from "react-materialize";
import Body from '../obj.json';
import $ from 'jquery';
import '../public/styles/Profile.css';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      user: '',
      painItems: [],
      emailStatus: '',
      toggle: false
    }

    this.onSubmit = this.userEmail.bind(this);
  }

  userEmail = (event) => {

    $(function() {
        $('.modal-trigger').click();
    });

    fetch('http://localhost:4000/email', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: this.state.profile[0].name,
        age: this.state.profile[0].age,
        height_feet: this.state.profile[0].height_feet,
        height_inches: this.state.profile[0].height_inches,
        weight: this.state.profile[0].weight,
        gender: this.state.profile[0].gender,
        allergies: this.state.profile[0].allergies,
        medication: this.state.profile[0].medication,
        conditions: this.state.profile[0].conditions,
        painItems: this.state.painItems,
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      this.setState({
        emailStatus: body.message,
        toggle: true
      })
    })
  }


  componentDidMount() {

    const user = localStorage.getItem('uid');

    fetch('http://localhost:4000/profile/' + user, {
      method: 'get',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'}
      }).then((response) => {
        return response.json();
      }).then((body) => {
        this.setState({
          profile: body.data
        })
      })

    fetch('http://localhost:4000/logs/' + user, {
      method: 'get',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => {
      return response.json();
    }).then((body) => {
      this.setState({
        user: body.data[0].name,
        painItems: body.data
      })
    })
  }

  formatDate = (date) => {
    return (date.slice(0, 10));
  }

  render() {

    const hidden = {
      'display': 'none'
    };

    var emailMessage = '';

    if (!this.state.toggle) {
      emailMessage = "Sending Email.....Please Wait";
    } else {
      emailMessage =  this.state.emailStatus;
    };

    return (
      <div>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <Col m={8} offset="m2" className="red lighten-2 z-depth-1">
              <h5 className="white-text"><Icon left className='white-text'>assignment_ind</Icon>User Profile</h5>
          </Col>
        </Row>
        <Row>
          <Col m={8} offset="m2">
            {this.state.profile.map((obj, index ) => {
              return (
                <Collapsible key={index} popout>
                  <CollapsibleItem header="Full Name" className="grey lighten-5 z-depth-1" icon='perm_identity'>
                    {obj.name}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Email" className="grey lighten-5 z-depth-1" icon='email'>
                    {obj.email}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Age" className="grey lighten-5 z-depth-1" icon='query_builder'>
                    {obj.age}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Gender" className="grey lighten-5 z-depth-1" icon='label_outline'>
                    {obj.gender}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Weight" className="grey lighten-5 z-depth-1" icon='label'>
                    {obj.weight}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Height" className="grey lighten-5 z-depth-1" icon='swap_vert'>
                    {obj.height_feet} ft, {obj.height_inches} inches
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Allergies" className="grey lighten-5 z-depth-1" icon='add_alert'>
                    {obj.allergies}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Prescriptions" className="grey lighten-5 z-depth-1" icon='star'>
                    {obj.medication}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                  <CollapsibleItem header="Medical Conditions" className="grey lighten-5 z-depth-1" icon='turned_in'>
                    {obj.conditions}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                </Collapsible>
              )
            })}
          </Col>
          <Row>
            <Col m={1} offset="m5">
              <form id="submitDescription" onSubmit={this.onSubmit}>
                <Modal
                  id="email-modal"
                  header="Email Status"
                  fixedFooter
                  trigger={
                    <Button type="submit" value="Submit" className="modal-trigger" style={hidden} />
                  }>
                  <h5>{ emailMessage }
                  </h5>
                </Modal>
                <Button waves="light" type="submit" value="Submit" className="red lighten-2" id="share-btn">Share</Button>
              </form>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col m={8} offset="m2" className='red lighten-2 z-depth-1'>
            <h5 className="white-text"><Icon left className='white-text'>view_list</Icon>Logs</h5>
          </Col>
          <Col m={8} offset="m2">
            <br></br>
            {this.state.painItems.map((obj, index) => {
              return (
                <Collapsible key={index} popout>
                  <CollapsibleItem header={obj.title} className="grey lighten-5 z-depth-1">
                    <Row>
                      <b> Pain Location </b> <br/>
                        {
                          Object.keys(Body['body']).filter((region, i) => {
                            const regId = obj.body_part_id.slice(0, 1);
                            const partId = obj.body_part_id;
                            if (Body['body'][region]['id'] === regId) {
                              Object.keys(Body['body'][region]['parts']).filter((part, i) => {
                                if (Body['body'][region]['parts'][part]['id'] === partId) {
                                  this.BodyPart = part
                                }
                                  return null;
                              })
                            }
                            return null;
                          })
                       }
                       {this.BodyPart}
                    </Row>
                    <Row>
                      <b> Description of pain </b> <br/>
                      {obj.description}
                    </Row>
                    <Row>
                      <b><Icon left className='red-text'>stars</Icon> Pain rating out of 5: </b> <br/>
                      {obj.pain_rating}
                    </Row>
                  </CollapsibleItem>
                </Collapsible>
              )
            })}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Profile;
