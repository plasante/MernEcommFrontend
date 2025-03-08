import { Outlet, useNavigate } from 'react-router-dom';
import * as ROUTES from '../GlobalConstants/urls';
import { useEffect } from 'react';
import { isAuthenticated } from './index';

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate(ROUTES.SIGNIN);
    }
  }, [navigate]);

  return <Outlet />;
};

export default PrivateRoute;