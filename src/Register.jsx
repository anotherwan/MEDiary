import React, {Component} from 'react';

class Register extends Component {

  render () {
    return (
      <div className="register">
        <form>
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
            Gender:
            <select>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
          </label>

        </form>

      </div>
    )


  }
}

export default Register;


          // password: 'human',
          // age: 22,
          // gender: 'male',
          // weight: 145,
          // height: '5ft 10in'