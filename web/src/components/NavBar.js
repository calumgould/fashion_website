import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Switch from 'react-switch';

import { toggleDarkMode } from '../actions';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import 'styles/NavBar.css';

const NavBar = ({dispatch, darkMode, cart}) => {

    useEffect(() => {
        if(darkMode) {
            document.documentElement.style.setProperty('--primary', '#FFD226')
            document.documentElement.style.setProperty('--secondary', '#FFFFFF')
            document.documentElement.style.setProperty('--secondary-inverted', '#000000')
            document.documentElement.style.setProperty('--background', '#212121')
            document.documentElement.style.setProperty('--background-lighter', '#262626')
            document.documentElement.style.setProperty('--background-inverted', '#FFFFFF')
            document.documentElement.style.setProperty('--background-inverted-lighter', '#f2f2f2')
            document.documentElement.style.setProperty('--button-text', '#000000')
        } else {
            document.documentElement.style.setProperty('--primary', '#FFD226')
            document.documentElement.style.setProperty('--secondary', '#000000')
            document.documentElement.style.setProperty('--secondary-inverted', '#FFFFFF')
            document.documentElement.style.setProperty('--background', '#FFFFFF')
            document.documentElement.style.setProperty('--background-lighter', '#f2f2f2')
            document.documentElement.style.setProperty('--background-inverted', '#212121')
            document.documentElement.style.setProperty('--background-inverted-lighter', '#262626')
            document.documentElement.style.setProperty('--button-text', '#FFFFFF')
        }
    }, [darkMode])

    const handleModeChange = (event) => {
        dispatch(toggleDarkMode(event))
        console.log('handleModeChange: ', darkMode);
    }
    


    return ( 
        <div>
            <ul className='nav'>
                <li className='toggle-button'>
                    <p id='no-click-label'></p>
                        <Switch
                            onChange={handleModeChange}
                            checked={darkMode}
                            onColor='#FFD226'
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
                    <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active' 
                    to="/shop">
                    <span>Shop</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='logo-link'
                    activeClassName='logo-link-active'
                    to="/">
                    trend.
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/about">
                    <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='link'
                    activeClassName='link-active'
                    to="/admin">
                    <span>Admin</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className='cart'
                    activeClassName='icon-active'
                    to="/cart">
                    <ShoppingCartIcon fontSize='large'/>
                    </NavLink>
                    {cart.length > 0 && <p className='cart-counter'>{cart.length}</p>}
                </li>
                <li>
                    <NavLink 
                    className='account'
                    activeClassName='icon-active'
                    to="/account">
                    <AccountCircleIcon fontSize='large'/>
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
      darkMode: state.userActions.darkMode,
      isAuthenticated: state.auth.isAuthenticated,
      cart: state.userActions.cart,
      cartCount: state.userActions.cartCount
    };
  }
  
export default (connect(mapStateToProps)(NavBar));
