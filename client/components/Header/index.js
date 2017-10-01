import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className='jumbotron' style={{ textAlign: 'center', background: '#212f57' }}>
        <h1 style={{ color: '#fff', padding: 10 }}>New York Times Search</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/saved_articles'>Saved Articles</NavLink>
      </div>
    );
  }
}

export default Header;
