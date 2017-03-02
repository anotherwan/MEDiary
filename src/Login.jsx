import React, {Component} from 'react';
import '../public/styles/App.css';
import { Link } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(function(res) {
      return res.json();
    }).then(function(body) {
      console.log(body)
    })

  }

  render () {
    return (
      <div className="login">
      <form id="login" onSubmit={this.onSubmit}>
        <label>
          Email:
          <input type="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
          <br/>
        </label>
        <label>
          Password:
          <input type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}/>
          <br/>
        </label>
          <input type="submit" value="Submit" />
      </form>

      </div>
    )
  }
}

export default Login;
