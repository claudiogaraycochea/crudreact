// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

let Navigation = () => {
  return <div className="nav-menu">
    <ul>
      <li><NavLink exact to="/" activeClassName="active">Login</NavLink></li>
      <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
    </ul>
    <div className="clearfix"></div>
  </div>
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav>
            <div className="nav-logo">
              Logo Demo
            </div>
            <Navigation/>
            <div className="clearfix"></div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;