import React, {Fragment} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {signout, isAuthenticated} from "../auth";

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
  const navigate = useNavigate();

  return (
    <div>
      <ul className={'nav nav-tabs bg-primary'}>
        <li className={'nav-item'}>
          <Link className={'nav-link'} style={isActive(location, '/')} to="/">Home</Link>
        </li>

        {!isAuthenticated() && (
          <Fragment>
            <li className={'nav-item'}>
              <Link className={'nav-link'} style={isActive(location, '/signin')} to="/signin">Signin</Link>
            </li>
            <li className={'nav-item'}>
              <Link className={'nav-link'} style={isActive(location, '/signup')} to="/signup">Signup</Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <div>
            <li className={'nav-item'}>
              <span className={'nav-link'} style={{cursor: 'pointer', color: '#ffffff'}} onClick={() => signout(() => {
                navigate('/');
              })}>Signout</span>
            </li>
          </div>
        )}


      </ul>
    </div>
  );
};

export default Menu;