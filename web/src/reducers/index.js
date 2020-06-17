import {combineReducers} from 'redux';

import auth from './auth';
import userActions from './userActions';

export default combineReducers({auth, userActions});