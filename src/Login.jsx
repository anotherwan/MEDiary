import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login_error: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      login_error: ''
    })

    fetch('http://localhost:4000/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      switch(body.message) {
        case 'User not found':
          this.setState({
            login_error: body.message
          })
          break;
        case 'Email and/or password cannot be empty':
          this.setState({
            login_error: body.message
          })
          break;
        case 'Invalid email and/or password':
          this.setState({
            login_error: body.message
          })
          break;
        default: {
          localStorage.setItem('uid', body.message);
          this.props.router.push('/');
        }
      }
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
        <div >
          {this.state.login_error}
        </div>
      </div>
    )
  }
}

export default Login;
