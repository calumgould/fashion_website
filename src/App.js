import React from 'react';
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

import 'styles/Main.css';
import 'styles/index.css';

const history = createBrowserHistory();

const App = (props) => {

    const { isAuthenticated, isVerifying } = props;

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
                    path='/login'
                    component={Login}
                    />
                    <Route 
                    exact path='/signup'
                    component={SignUp}
                    />
                    <Route 
                    path='/checkout'
                    component={Checkout}
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
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);

