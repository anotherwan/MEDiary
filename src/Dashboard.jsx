import React, {Component} from 'react';
import Body from '../obj.json';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      painItems: []
    }
  }

  BodyPart = ''

  componentDidMount() {

      fetch('http://localhost:4000/dashboard', {
        method: 'post',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: localStorage.getItem('uid')
        })
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

    return (
      <div>
        <div style={{"position": "absolute", "top": "130px"}}>
          Name: {this.state.user}<br />
          {this.state.painItems.map((obj, index) => {
            return (
              <span key={index}>
                <span>Title: {obj.title}<br /></span>
                <span>Body Part: {
                                    Object.keys(Body['body']).map((region, i) => {
                                      const regId = obj.body_part_id.slice(0, 1);
                                      const partId = obj.body_part_id;
                                      if (Body['body'][region]['id'] === regId) {
                                        Object.keys(Body['body'][region]['parts']).map((part, i) =>{
                                          if (Body['body'][region]['parts'][part]['id'] === partId) {
                                            this.BodyPart = part
                                          }
                                            return null;
                                        })
                                      }
                                      return null;
                                    })
                                 }
                                 {this.BodyPart}<br /></span>
                <span>Description: {obj.description}<br /></span>
                <span>Pain Rating: {obj.pain_rating}<br /></span>
                <span>Date Logged: {this.formatDate(obj.date_created)}<br /></span>
                <br/>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;
