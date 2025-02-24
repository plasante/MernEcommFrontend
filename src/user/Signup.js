import React, {useState} from 'react';
import Layout from '../core/Layout';
import {API} from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const {name, email, password} = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const signUp = (user) => {
    console.log(name, email, password);
    fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        return response.json()
      })
      .catch(error => console.log(error));
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    signUp({name, email, password});
  }

  const signUpForm = () => {
    return (
      <form>
        <div className="form-group">
          <input onChange={handleChange} name={'name'} value={values.name} type='text' className={'form-control'} placeholder='Name'/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} name={'email'} value={values.email} type='email' className={'form-control'} placeholder='Email'/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} name={'password'} value={values.password} type='password' className={'form-control'} placeholder='Password'/>
        </div>
        <button onClick={clickSubmit} className="btn btn primary">
          Submit
        </button>
      </form>
    );
  }


  return (
    <Layout className={'container col-md-8 offset-md-2 '} title="Signup" description="Signup to Grocery App">
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};

export default Signup;