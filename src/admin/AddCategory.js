import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localStorage.getItem('jwt')
  const {user, token} = isAuthenticated();

  const handleChange = (e) => {
    setError(false);
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    // make request to API to create category

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


  return (
    <Layout title={'Add a new Category'}
            description={`Good Day ${name}, ready to add a new category.`}>
      <div className={'row'}>
        <div className={'col-md-8 offset-md-2 col-xs-12'}>
          {newCategoryForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;