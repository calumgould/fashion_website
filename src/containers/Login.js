import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";

import 'styles/Form.css';
import 'styles/Login.css';

const Login = (props) => {
  
  const { loginError, isAuthenticated } = props;

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const { dispatch } = props;
    dispatch(loginUser(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/account" />
  } else {
    return (
      <div className='login-page'>
          <div className='form-wrapper'>
            <h2>Sign In</h2>
          {loginError && (<p>Incorrect email or password.</p>)}
              <input type='email' name='name' placeholder='Email...' onChange={handleEmailChange} />
              <input type='password' name='password' placeholder='Password...' onChange={handlePasswordChange} />
              <div className='button-wrapper'>
                <button className='button' onClick={handleSubmit}>
                  Sign In
                </button>
              </div>
          </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default (connect(mapStateToProps)(Login));