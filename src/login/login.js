// Dependencies
import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = { 
      username: 'test1111111',
      passowrd: '',
      token: localStorage.getItem('token'),
    }
    console.log('constructor: '+JSON.stringify(this.state));
    //this.closeSignIn = this.closeSignIn.bind(this);
    //this.signIn = this.signIn.bind(this);
  }

  render() {
    return (
      <div className="Header">
        <div className="row">
          <input type="text"/>
        </div>
        <div className="row">
          <input type="text"/>
        </div>
        <div className="row">
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;