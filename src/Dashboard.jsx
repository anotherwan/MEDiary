import React, {Component} from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      itemNumber: 0,
      painItems: []
    }

    this.onSubmit = this.getStats.bind(this);
    this.data = this.statsData.bind(this);
  }


  getStats = (event) => {
    event.preventDefault();

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
      console.log(body.data.length);
      this.setState({
        painItems: body.data
      })
    })
  }

  statsData = () => {
    let data = this.state.painItems;
    return (<span>data</span>)
  }

  render() {

    return (
      <div>
        <form id="dashboard" onSubmit={this.onSubmit}>
          <input type="submit" value="Show Stats"/>
        </form>
        <div>
          Some Stats:
          {this.state.painItems.map((obj, index) => {
            return (
              <span key={index}>
                <span>{obj.name}</span>
                <span>{obj.title}</span>
                <span>{obj.description}</span>
                <span>{obj.pain_rating}</span>
                <span>{obj.date_created}</span>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;