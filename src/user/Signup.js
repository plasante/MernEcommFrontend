import React, {useState} from 'react';
import Layout from '../core/Layout';
import {API} from "../config";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const {name, email, password, error, success} = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '' });
  }

  const signUp = (user) => {
    return fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  }


  const clickSubmit = (e) => {
    e.preventDefault();
    signUp({name, email, password})
      .then(response => {
        if (!response.error) {
          setValues({ ...values, name: '', email: '', password: '', error: '', success: true });
        } else {
          setValues({ ...values, error: response.error, success: false });
        }
      })
  }

  const signUpForm = () => {
    return (
      <form>
        <div className="form-group">
          <input onChange={handleChange} name={'name'} value={values.name} type='text' className={'form-control'} placeholder='Name'/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} name={'email'} value={email} type='email' className={'form-control'} placeholder='Email'/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} name={'password'} value={password} type='password' className={'form-control'} placeholder='Password'/>
        </div>
        <button onClick={clickSubmit} className="btn btn primary">
          Submit
        </button>
      </form>
    );
  }

  const showError = () => {
    return <div className={'alert alert-danger'} style={{display: error ? '' : 'none'}}>
      {error}
    </div>
  }

  const showSuccess = () => {
    return <div className={'alert alert-info'} style={{display: success ? '' : 'none'}}>
      New account is created. Please <Link to={'/signin'}>Signin</Link>/
    </div>
  }

  return (
    <Layout className={'container col-md-8 offset-md-2 '} title="Signup" description="Signup to Grocery App">
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;