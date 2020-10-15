import React from 'react';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';
import './login-and-register.styles.scss'

const LoginAndRegisterPage = () => (

    <div className='container'>
        <div className='photoFrame' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'})`}}></div>
        <div className='photoFrame' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1551488831-68b4d0c92c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'})`}}></div>
        <div className='photoFrame' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1584609226397-de5612afdfea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'})`}}></div>
        <div className='photoFrame' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'})`}}></div>
        <div className='loginRegisterFrame'>
            {/* TODO: let child components change each other's visibility */}
            {
                true ? <Login/>
                : <Register/>
            }
        </div>
    </div>
);

export default LoginAndRegisterPage;
