import React, {Component} from 'react';

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
        <div>User Profile</div>
        {this.state.profile.map((obj, index ) => {
          return (
            <span key={index}>
              <span>Name: {obj.name}<br /></span>
              <span>Age: {obj.age}<br /></span>
              <span>Gender: {obj.gender}<br /></span>
              <span>Weight: {obj.weight}<br /></span>
              <span>Height: {obj.height_feet} ft, {obj.height_inches} inches<br /></span>
              <span>Allergies: {obj.allergies}<br /></span>
              <span>Current Prescriptions: {obj.medication}<br /></span>
              <span>Existing Medical Conditions: {obj.conditions}<br /></span>
            </span>
          )
          })
        }
      </div>
    )
  }
}

export default Profile;