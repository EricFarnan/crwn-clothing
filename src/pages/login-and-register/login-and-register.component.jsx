import React from 'react';
import Login from '../../components/login-register/login/login.component';
import Register from '../../components/login-register/register/register.component';
import './login-and-register.styles.scss';

const LoginAndRegisterPage = () => (
    <div className='loginRegister'>
        <Login/>
        <Register/>
    </div>
);

export default LoginAndRegisterPage;
