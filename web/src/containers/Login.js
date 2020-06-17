import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import { NavLink } from 'react-router-dom';

import 'styles/Form.css';
import 'styles/Login.css';

const Login = (props) => {
  
  const { loginError } = props;

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
    dispatch(loginUser(email, password))
    props.history.goBack();
  };

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
                <p>Don't have an account? <NavLink className='sign-up' to="/signup">Sign Up</NavLink></p>
          </div>
      </div>
    )

}

function mapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
  };
}

export default (connect(mapStateToProps)(Login));