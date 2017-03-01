import React, {Component} from 'react';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      reg_error: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      reg_error: ''
    })

    fetch('http://localhost:4000/register', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        gender: this.state.gender,
        weight: this.state.weight,
        height: this.state.height
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      console.log(body.message);
      switch(body.message) {
        case 'Error creating user':
          this.setState({
            reg_error: body.message
          })
          break;
        case 'Email and/or password is empty':
          this.setState({
            reg_error: body.message
          })
          break;
        case 'Invalid email address':
          this.setState({
            reg_error: body.message
          })
          break;
        default:
          localStorage.setItem('uid', body.message);
      }
    })
  }

  render () {
    return (
      <div className="register" >
        <form id="register" onSubmit={this.onSubmit} >
          <label>
            Name:
            <input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} />
          </label><br/>
          <label>
            E-mail:
            <input type="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
          </label><br/>
          <label>
            Password:
            <input type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password}/>
          </label><br/>
          <label>
            Age:
            <input type="number" onChange={(e) => this.setState({age: e.target.value})} value={this.state.age}/>
          </label> <br />
          <label>
            Gender:
            <select name="gender" onChange={(e) => this.setState({gender: e.target.value})} value={this.state.gender}>
            //make starting value blank and in db contrain to have value
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
          </label><br />
          <label>
            Weight:
            <input type="number" onChange={(e) => this.setState({weight: e.target.value})} value={this.state.weight}/>
          </label> <br />
          <label>
            Height:
            <input type="text" onChange={(e) => this.setState({height: e.target.value})} value={this.state.height}/>
          </label> <br />
            <input type="submit" value="Submit" />
        </form>
        <div >
            {this.state.reg_error}
        </div>
      </div>
    )
  }
}

export default Register;
