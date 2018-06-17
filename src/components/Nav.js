import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Nav extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Nav;
