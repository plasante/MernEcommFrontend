import React, {Fragment} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import * as ROUTES from '../GlobalConstants/urls';
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
          <Link className={'nav-link'} style={isActive(location, ROUTES.HOME)} to={ROUTES.HOME}>Home</Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role.type === 0 && (
          <li className={'nav-item'}>
            <Link className={'nav-link'} style={isActive(location, ROUTES.USER_DASHBOARD)}
                  to={ROUTES.USER_DASHBOARD}>Dashboard</Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role.type === 1 && (
          <li className={'nav-item'}>
            <Link className={'nav-link'} style={isActive(location, ROUTES.ADMIN_DASHBOARD)}
                  to={ROUTES.ADMIN_DASHBOARD}>Dashboard</Link>
          </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className={'nav-item'}>
              <Link className={'nav-link'} style={isActive(location, ROUTES.SIGNIN)} to={ROUTES.SIGNIN}>Signin</Link>
            </li>
            <li className={'nav-item'}>
              <Link className={'nav-link'} style={isActive(location, ROUTES.SIGNUP)} to={ROUTES.SIGNUP}>Signup</Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <div>
            <li className={'nav-item'}>
              <span className={'nav-link'} style={{cursor: 'pointer', color: '#ffffff'}} onClick={() => signout(() => {
                navigate(ROUTES.HOME);
              })}>Signout</span>
            </li>
          </div>
        )}


      </ul>
    </div>
  );
};

export default Menu;