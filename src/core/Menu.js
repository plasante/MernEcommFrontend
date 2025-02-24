import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// Notice the function parameter, it's now 'location' and not 'history'
const isActive = (location, path) => {
  if(location.pathname === path) {
    return {color: '#ff9900'}
  }
  else {
    return {color: '#ffffff'}
  }
}

const Menu = () => {
  const location = useLocation();

  return (
    <div>
      <ul className={'nav nav-tabs bg-primary'}>
        <li className={'nav-item'}>
          <Link className={'nav-link'} style={isActive(location, '/')} to="/">Home</Link>
        </li>
        <li className={'nav-item'}>
          <Link className={'nav-link'} style={isActive(location, '/signin')} to="/signin">Signin</Link>
        </li>
        <li className={'nav-item'}>
          <Link className={'nav-link'} style={isActive(location, '/signup')} to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;