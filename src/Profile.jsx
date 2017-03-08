import React, {Component} from 'react';
import {Row, Col, Collapsible, CollapsibleItem, Icon} from "react-materialize";
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
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Row>
          <Col m={10} offset="m1" className="red lighten-2 z-depth-1">
              <h5 className="white-text"><Icon left className='white-text'>assignment_ind</Icon>User Profile</h5>
          </Col>
        </Row>
        <Row>
          <Col m={8} offset="m2">
            {this.state.profile.map((obj, index ) => {
              return (
                <Collapsible popout>
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
                    {obj.height}
                    <Icon right className='orange-text'>mode_edit</Icon><Icon right className='red-text'>delete</Icon>
                  </CollapsibleItem>
                </Collapsible>
              )
            })}
          </Col>
        </Row>

          {/* <Row m={6} >
            <Col m={6} offset="m3" className="blue-grey lighten-5 z-depth-1">
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
                        <td>{obj.height}</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{obj.weight}</td>
                      </tr>
                    </tbody>
                  </Table>
                )
              })}
            </Col>
          </Row> */}
      </div>
    )
  }

}

export default Profile;
