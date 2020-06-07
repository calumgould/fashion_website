import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import Switch from 'react-switch';

import 'styles/NavBar.css';

const NavBar = (props) => {

    const [darkMode, setDarkMode] = useState(true)

    const handleLogout = () => {
        const { dispatch } = props;
        dispatch(logoutUser());
    };

    useEffect(() => {
        if(darkMode === true) {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#FFFFFF')
            document.documentElement.style.setProperty('--secondary-inverted', '#000000')
            document.documentElement.style.setProperty('--background', '#212121')
            document.documentElement.style.setProperty('--background-inverted', '#FFFFFF')
        } else {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#000000')
            document.documentElement.style.setProperty('--secondary-inverted', '#FFFFFF')
            document.documentElement.style.setProperty('--background', '#FFFFFF')
            document.documentElement.style.setProperty('--background-inverted', '#212121')
        }
    }, [darkMode])
    
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
                <li className='toggle-button'>
                    <p id='no-click-label'></p>
                        <Switch
                            onChange={(checked) => setDarkMode(checked)}
                            checked={darkMode}
                            onColor='#FF0266'
                            offColor='#D3D3D3'
                            onHandleColor='#F8F8FF'
                            offHandleColor='#212121'
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={30}
                            height={20}
                            width={48}
                            aria-labelledby='no-click-label'
                        />
                    </li>
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
