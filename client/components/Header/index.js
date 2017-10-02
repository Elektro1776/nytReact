import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const navStyles = {
  navLink: {
    padding: 10,
  }
}
class Header extends Component {
  render() {
    return (
      <div className='jumbotron' style={{ textAlign: 'center', background: '#212f57' }}>
        <h1 style={{ color: '#fff', padding: 10 }}>New York Times Search</h1>
        <NavLink to='/' style={ navStyles.navLink }>Home</NavLink>
        <NavLink to='/saved_articles' style={ navStyles.navLink}>Saved Articles</NavLink>
      </div>
    );
  }
}

export default Header;
