import React, {useState} from 'react';
import * as ROUTES from '../GlobalConstants/urls';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from 'react-router-dom';
import {createCategory} from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // destructure user and token from localStorage.getItem('jwt')
  const {user, token} = isAuthenticated();

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to API to create category
    createCategory(user._id, token, {name})
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setError('');
          setSuccess(true);
        }
      })
  }

  const newCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text"
               className="form-control"
               value={name}
               placeholder={'Category name'}
               autoFocus
               required
               onChange={handleChange}
        />
      </div>
      <button className={'btn btn-outline-primary'}>
        Create new category
      </button>
    </form>
  )

  const showSuccess = () => {
    if (success) {
      return <h3 className={'text-success'}>{name} is successfully created.</h3>
    }
  }

  const showError = () => {
    if (error) {
      return <h3 className={'text-danger'}>{name} should be unique.</h3>
    }
  }

  const goBack = () => (
    <div className={'mt-5'}>
      <Link to={ROUTES.ADMIN_DASHBOARD} className={'text-warning'}>
        Back to Dashboard
      </Link>
    </div>
  )


  return (
    <Layout title={'Add a new Category'}
            description={`Good Day ${user.name}, ready to add a new category?`}>
      <div className={'row'}>
        <div className={'col-md-8 offset-md-2 col-xs-12'}>
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;