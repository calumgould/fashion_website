import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import ScrollToTop from 'components/ScrollToTop';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Recipes from 'containers/Recipes';
import About from 'containers/About';
import Account from 'containers/Account';
import Register from 'containers/Register';

import 'styles/Main.css';
import 'index.css';

const history = createBrowserHistory();

const Nav = () => {
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
                    path='/recipes'
                    component={Recipes}
                    />
                    <Route 
                    path='/about'
                    component={About}
                    />
                    <Route 
                    path='/account'
                    component={Account}
                    />
                    <Route 
                    path='/register'
                    component={Register}
                    />
                </Switch>   
            </Router>
        </>
     );
}
 
export default Nav;