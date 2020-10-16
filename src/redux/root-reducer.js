import { combineReducers } from 'redux';

import loginRegisterReducer from './login-register/login-register.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    loginRegister: loginRegisterReducer,
    user: userReducer,
    cart: cartReducer  
});