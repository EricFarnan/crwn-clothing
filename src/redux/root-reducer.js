import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// local storage
import storage from 'redux-persist/lib/storage';

import loginRegisterReducer from './login-register/login-register.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// config for persistance
const persistConfig = {
    key: 'root',
    storage,
    // items we want to persist
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    loginRegister: loginRegisterReducer,
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);