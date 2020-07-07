import {combineReducers} from 'redux';

import auth from './auth';
import userActions from './userActions';
import admin from './admin'

export default combineReducers({auth, userActions, admin});