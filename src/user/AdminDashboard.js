import React from 'react';
import * as ROUTES from '../GlobalConstants/urls';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";


const AdminDashboard = () => {

  const {user: {name, email, role}} = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className={'card'}>
        <h4 className={'card-header'}>Admin links</h4>
        <ul className="list-group">
          <li className={'list-group-item'}>
            <Link className={'nav-link'} to={ROUTES.CREATE_CATEGORY}>Create Category</Link>
          </li>
          <li className={'list-group-item'}>
            <Link className={'nav-link'} to={ROUTES.CREATE_PRODUCT}>Create Product</Link>
          </li>
        </ul>
      </div>
    )
  }

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Admin Information</h3>
        <ul className="list-group">
          <li className={'list-group-item'}>{name}</li>
          <li className={'list-group-item'}>{email}</li>
          <li className={'list-group-item'}>{role === 1 ? 'Admin' : 'Registered User'}</li>
        </ul>
      </div>
    )
  }

  return (
    <Layout className={'container-fluid'} title={'Dashboard'} description={`Good Day ${name}!`}>
      <div className={'row'}>
        <div className={'col-3'}>
          {adminLinks()}
        </div>
        <div className={'col-9'}>
          {adminInfo()}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;