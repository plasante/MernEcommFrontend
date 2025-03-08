import React, {useState, useEffect} from 'react';
import * as ROUTES from '../GlobalConstants/urls';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from 'react-router-dom';
import {createProduct} from "./apiAdmin";

const AddProduct = () => {

  // destructure user and token from localStorage.getItem('jwt')
  const {user, token} = isAuthenticated();

  return (
    <Layout title={'Add a new Product'}
            description={`Good Day ${user.name}, ready to add a new product?`}>
      <div className={'row'}>
        <div className={'col-md-8 offset-md-2 col-xs-12'}>
          ...
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;