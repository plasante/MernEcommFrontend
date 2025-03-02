import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isAuthenticated } from './index';

const AdminRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      return navigate('/signin');
    } else {
      if (isAuthenticated().user.role.type !== 1) {
        return navigate('/signin');
      }
    }
  }, [navigate]);

  return <Outlet />;
};

export default AdminRoute;