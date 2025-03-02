import React, {useState} from 'react';
import Layout from '../core/Layout';
import { Link } from "react-router-dom";
import {signUp} from "../auth";
import Alert from "../components/Alert";

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  // destructure las states
  const {name, email, password, error, success} = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '' });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    // on specifie le body de la requete HTML
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

  return (
    <Layout
      className="container col-md-8 offset-md-2"
      title="Signup"
      description="Signup to Grocery App"
    >
      <Alert type='success' condition={success}>New account is created. Please <Link to={'/signin'}>Signin</Link></Alert>
      <Alert type='error' condition={error}>{error}</Alert>
      {signUpForm()}
    </Layout>
  );
};

export default Signup;