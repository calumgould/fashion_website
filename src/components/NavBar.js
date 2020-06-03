import React from 'react';
import {NavLink} from 'react-router-dom';

import 'styles/NavBar.css';

const NavBar = ({history}) => {
    
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
                <li>
                    <NavLink 
                    className='login'
                    activeClassName='link-active'
                    to="/register">
                    Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;