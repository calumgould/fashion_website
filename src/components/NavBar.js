import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import 'styles/NavBar.css';

const NavBar = (props) => {

    const handleLogout = () => {
        const { dispatch } = props;
        dispatch(logoutUser());
    };
    
    const toggleLoginLink = () => {
        if(props.isAuthenticated) {
            return (
                <li>
                    <NavLink 
                    className='login'
                    to="/"
                    onClick={handleLogout}>
                    Logout
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li>
                    <NavLink 
                    className='login'
                    activeClassName='link-active'
                    to="/login">
                    Login
                    </NavLink>
                </li>
            )
        }
    }

    return ( 
        <div>
            <ul className='nav'>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/" exact>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active' 
                    to="/recipes">
                    Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='logo-link'
                    activeClassName='logo-link-active'
                    to="/">
                    Feasty
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/about">
                    About
                    </NavLink>
                </li>   
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/account">
                    Account
                    </NavLink>
                </li>
                {toggleLoginLink()}
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  
export default (connect(mapStateToProps)(NavBar));
