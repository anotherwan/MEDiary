import React, {Component} from 'react';
import Body from '../obj.json';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      itemNumber: 0,
      painItems: []
    }
  }

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
                                      console.log(region === 'head');
                                      return (region);
                                    })
                                 }<br /></span>
                <span>Desctiption: {obj.description}<br /></span>
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