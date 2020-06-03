import React from 'react';
import {NavLink} from 'react-router-dom';

import 'styles/NavBar.css';

const NavBar = () => {
    
    return ( 
        <div>
            <ul className='nav'>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/" exact>
                    link1
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active' 
                    to="/">
                    link2
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/">
                    link3
                    </NavLink>
                </li>   
            </ul>
        </div>
    );
}

export default NavBar;