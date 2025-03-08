import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './GlobalConstants/urls';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/AddCategory";

/**
 * Todo: Utilise Suspense et lazy
 */
const RouteTree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.USER_DASHBOARD} element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path={ROUTES.CREATE_CATEGORY} element={<AdminRoute />}>
          <Route index element={<AddCategory />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} /> {/* Ajout de cette ligne */}
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>Erreur 404</h2>
      <p>La page à laquelle vous essayez d'accéder n'existe pas.</p>
    </div>
  )
};

export default RouteTree;