import React, {useState} from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import { createUser } from "../actions";

import 'styles/Form.css';
import 'styles/Login.css';

const SignUp = ({dispatch, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setdisplayName] = useState('')
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handledisplayNameChange = (event) => {
        setdisplayName(event.target.value)
    }
  
    const handleSubmit = () => {
        dispatch(createUser(email, password, displayName, history))
        history.push('/account')
    };

    return ( 
        <div className='login-page'>
            <div className='form-wrapper'>
                <h2>Sign Up</h2>
                <input type='text' name='displayName' placeholder='Username...' onChange={handledisplayNameChange} required/>
                <input type='email' name='name' placeholder='Email...' onChange={handleEmailChange} required/>
                <input type='password' name='password' placeholder='Password...' onChange={handlePasswordChange} required/>
                <div className='button-wrapper'>
                    <button className='button' onClick={handleSubmit}>
                        Create Account
                    </button>
                </div>
                <p>Already have an account? <NavLink className='sign-up' to="/login">Login</NavLink></p>

            </div>
        </div>
    );

    
    
}
 
function mapStateToProps(state) {
    return {
      isCreated: state.auth.isCreated
    };
  }
  
  export default (connect(mapStateToProps)(SignUp));