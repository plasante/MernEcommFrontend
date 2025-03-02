import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isAuthenticated } from './index';

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/signin');
    }
  }, [navigate()]);

  return <Outlet />;
};

export default PrivateRoute;