import React, {Component} from 'react';
import { Link } from "react-router";
import { Navbar, NavItem, Modal } from 'react-materialize';

import medProfile from '../public/images/medProfile.svg'
import bandaid from '../public/images/BandaidLogo.svg'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.onClick = this.handleLogout.bind(this);
  }


  handleLogout = (event) => {
    localStorage.setItem('uid', '');
  }

  render () {
    return (
        <div className="navbar-fixed">
        <Navbar className='teal lighten-4'>
          <NavItem>
            <Link to='/'>
              <img src={bandaid} style={{'height': '60px', 'width': '60px'}}/>MEDiary
            </Link>
          </NavItem>
          <NavItem>
            <Modal
              header='Login'
              fixedFooter
              trigger={
                <Link to='/login'>Login</Link>
              }>
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
            </Modal>
          </NavItem>
          <NavItem>
            <Link to='/register'> Registration</Link>
          </NavItem>
          <NavItem>
            <Link to='/logout'>Logout
          </Link>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Nav;
