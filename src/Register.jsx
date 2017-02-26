import React, {Component} from 'react';

class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    alert('working')
  }



  render () {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label><br/>
          <label>
            E-mail:
            <input type="email" name="email" />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" />
          </label><br/>
          <label>
            Age:
            <input type="text" name="age" />
          </label> <br />
          <label>
            Gender:
            <select>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
          </label><br />
          <label>
            Weight:
            <input type="text" name="weight" />
          </label> <br />
          <label>
            Height:
            <input type="text" name="height" />
          </label> <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Register;
