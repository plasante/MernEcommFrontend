import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isAuthenticated } from './index';

const AdminRoute = () => {
  const navigate = useNavigate();
  const authStatus = isAuthenticated();

  useEffect(() => {
    // if not authenticated, redirect to sign in
    if (!authStatus) {
      navigate('/signin');
      return;
    }

    // if not an admin, redirect to home
    if (authStatus.user.role.type !== 1) {
      navigate('/');
      return;
    }
  }, [navigate, authStatus]);

  return <Outlet />;
};

export default AdminRoute;