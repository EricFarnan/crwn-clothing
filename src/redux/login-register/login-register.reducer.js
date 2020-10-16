import { LoginRegisterActionTypes } from './login-register.types';

const INITIAL_STATE = {
    hideLogin: false
};

const loginRegisterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LoginRegisterActionTypes.HIDE_LOGIN:
            return {
                ...state,
                hideLogin: !state.hideLogin
            };
        default:
            return state;
    }
};

export default loginRegisterReducer;