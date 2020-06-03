import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import ScrollToTop from 'components/ScrollToTop';
import NavBar from 'components/NavBar';
import Login from 'containers/Login';

import 'styles/Main.css';
import 'index.css';

const history = createBrowserHistory();

const Nav = () => {
    return ( 
        <>
            <Router history={history}>
                <ScrollToTop />
                <NavBar />
                <Switch>
                    <Route 
                    exact path='/' 
                    component={Login}/>
                </Switch>
            </Router>
        </>
     );
}
 
export default Nav;