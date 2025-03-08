import React, {useState, useEffect} from 'react';
import * as ROUTES from '../GlobalConstants/urls';
import Layout from '../core/Layout';
import {isAuthenticated} from "../auth";
import {Link} from 'react-router-dom';
import {createProduct} from "./apiAdmin";

const AddProduct = () => {

  // destructure user and token from localStorage.getItem('jwt')
  const {user, token} = isAuthenticated();

  const [values, setValues] = useState({
      name: '',
      description: '',
      price: '',
      categories: [],
      category: '',
      shipping: '',
      quantity: '',
      photo: '',
      loading: false,
      error: '',
      createdProduct: '',
      redirectToProfile: false,
      formData: ''
    });

    const {
      name,
      description,
      price,
      categories,
      category,
      shipping,
      quantity,
      loading,
      error,
      createdProduct,
      redirectToProfile,
      formData
    } = values;

    useEffect(() => {
      setValues({ ...values, formData: new FormData() });
    }, []);

    const handleChange = (e) => {
      const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(e.target.name, value);
      setValues({ ...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
    }

    const newProductForm = () => (
      <form className={'mb-3'} onSubmit={handleSubmit}>
        <h4>Post Photo</h4>
        <div className={'form-group'}>
          <label className={'btn btn-secondary'}>
            <input onChange={handleChange}
                   type={'file'}
                   name={'photo'}
                   accept={'image/*'}
                   className={'form-control'}
            />
          </label>
        </div>
        <div className={'form-group'}>
          <input onChange={handleChange} type={'text'} className={'form-control'} name={'name'} value={name}
                 placeholder={'Product name'}/>
        </div>
        <div className={'form-group'}>
          <textarea onChange={handleChange} className={'form-control'} name={'description'} value={description}
                    placeholder={'Description'}/>
        </div>
        <div className={'form-group'}>
          <input onChange={handleChange} type={'number'} className={'form-control'} name={'price'} value={price}
                 placeholder={'Price'}/>
        </div>
        <div className={'form-group'}>
          <select onChange={handleChange} className={'form-control'} name={'category'}>
            <option value={''}>Select Product Category</option>
            <option value={'67cc425a3df0f8ef2f9c847d'}>Milk</option>
            <option value={'67cc42b43df0f8ef2f9c8486'}>Bread</option>
          </select>
        </div>
        <div className={'form-group'}>
          <input onChange={handleChange} type={'number'} className={'form-control'} name={'quantity'} value={quantity}
                 placeholder={'Quantity'}/>
        </div>
        <div className={'form-group'}>
          <select onChange={handleChange} className={'form-control'} name={'shipping'}>
            <option value={''}>Select Shipping Available (Y/N)</option>
            <option value={'0'}>No</option>
            <option value={'1'}>Yes</option>
          </select>
        </div>
        <button className={'btn btn-outline-primary'}>Create Product</button>
      </form>
    )

  return (
    <Layout title={'Add a new Product'}
            description={`Good Day ${user.name}, ready to add a new product?`}>
      <div className={'row'}>
        <div className={'col-md-8 offset-md-2 col-xs-12'}>
          {newProductForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;