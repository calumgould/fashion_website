import React, { useEffect } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";

import ProtectedRoute from 'components/ProtectedRoute';
import ScrollToTop from 'components/ScrollToTop';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Shop from 'containers/Shop';
import About from 'containers/About';
import Account from 'containers/Account';
import Login from 'containers/Login';
import SignUp from 'containers/SignUp';
import Checkout from 'containers/Checkout';
import Cart from 'containers/Cart';
import Contact from 'containers/Contact';
import Admin from 'containers/Admin';

import { 
    getCart, 
    getCategories,
    getProducts
} from 'actions';

import 'styles/Main.css';
import 'styles/index.css';

const history = createBrowserHistory();

const App = (props) => {

    const { isAuthenticated, isVerifying, dispatch, user, cart } = props;

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
        if (user.uid && cart.length < 1) {
            console.log('USEEFFECT', user.uid);
            dispatch(getCart(user)) 
        }
    }, [user, cart.length, dispatch])

    return ( 
        <>
            <Router history={history}>
                <ScrollToTop />
                <Switch>
                    <Route exact path='/' />
                    <Route path ='/' render={(props) => <NavBar {...props} />} />
                </Switch>
                <Switch>
                    <Route 
                    exact path='/' 
                    component={Home}
                    />
                    <Route 
                    path='/shop'
                    component={Shop}
                    />
                    <Route 
                    path='/about'
                    component={About}
                    />
                    <Route 
                    path='/contact'
                    component={Contact}
                    />
                    <Route 
                    path='/login'
                    component={Login}
                    />
                    <Route 
                    exact path='/signup'
                    component={SignUp}
                    />
                    <Route 
                    path='/cart'
                    component={Cart}
                    />
                    <Route 
                    path='/checkout'
                    component={Checkout}
                    />
                    <Route 
                    path='/admin'
                    component={Admin}
                    />
                    <ProtectedRoute 
                    path='/account'
                    component={Account}
                    isAuthenticated={isAuthenticated}
                    isVerifying={isVerifying}
                    />
                </Switch>   
            </Router>
        </>
     );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    user: state.auth.user,
    cart: state.userActions.cart,
    isCreated: state.auth.isCreated,
  };
}

export default connect(mapStateToProps)(App);

