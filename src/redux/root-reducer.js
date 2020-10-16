import { combineReducers } from 'redux';

import userReducter from './user/user.reducer';

export default combineReducers({
    user: userReducter
});