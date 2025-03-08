import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from "./auth/AdminRoute";

const RouteTree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/admin/dashboard" element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Ajout de cette ligne */}
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