import React, {useState, useEffect} from 'react';
import * as ROUTES from '../GlobalConstants/urls';
import Layout from '../core/Layout';
import {signIn, authenticate, isAuthenticated} from "../auth";
import {useNavigate} from "react-router-dom";
import Alert from "../components/Alert";

const Signin = () => {
  const [values, setValues] = useState({
    email: 'pierre.lasante@videotron.ca',
    password: '123456',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const navigate = useNavigate();
  const {email, password, error, loading, redirectToReferrer} = values;
  const {user} = isAuthenticated();

  useEffect(() => {
    if (redirectToReferrer) {
      if (user && user.role.type === 1) {
        navigate(ROUTES.ADMIN_DASHBOARD);
      } else {
        navigate(ROUTES.USER_DASHBOARD);
      }
    }
  }, [navigate, redirectToReferrer, user]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, error: '' });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({...values, error: '', loading: true})
    signIn({email, password})
      .then(response => {
        if (!response.error) {
          authenticate(response, () => {
            setValues({ ...values, redirectToReferrer: true });
          })
        } else {
          setValues({ ...values, error: response.error, loading: false });
        }
      })
  }

  const signUpForm = () => {
    return (
      <form>
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
    <Layout className={'container col-md-8 offset-md-2 '} title="Signin" description="Signin to Grocery App">
      <Alert type='info' condition={loading}><h2>Loading...</h2></Alert>
      <Alert type='error' condition={error}>{error}</Alert>
      {signUpForm()}
    </Layout>
  );
};

export default Signin;