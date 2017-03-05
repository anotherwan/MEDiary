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
      console.log(body.data[0].name);
      this.setState({
        user: body.data[0].name,
        painItems: body.data
      })
    })
  }

  render() {

    return (
      <div>
        <form id="dashboard" onSubmit={this.onSubmit}>
          <input type="submit" value="Show Stats"/>
        </form>
        <div>
          Some Stats:
          {this.state.user}<br />
          {this.state.painItems.map((obj, index) => {
            return (
              <span key={index}>
                <span>{obj.title}<br /></span>
                <span>{obj.description}<br /></span>
                <span>{obj.pain_rating}<br /></span>
                <span>{obj.date_created}<br /></span>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;