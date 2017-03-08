import React, {Component} from 'react';
import Graph from './Graph.jsx'

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
        console.log(body);
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
        <Graph />
      </div>
    )
  }
}

export default Dashboard;
