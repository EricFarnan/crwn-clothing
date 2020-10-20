import React from 'react';
import FormInput from '../../extensions/form-input/form-input.component';
import CustomButton from '../../extensions/custom-button/custom-button.component';

import {auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

import './register.styles.scss';

class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        // destructure the form information from the state
        const { displayName, email, password, confirmPassword } = this.state;

        // password validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // attempt to create a new user with the credentials
        try {
            // destructure the user from the firebase method
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // add the user to the db
            await createUserProfileDocument(user, {displayName});

            // clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            alert(error.message);
            return;
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='register'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email</span>

                <form className='register-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>

                    <div>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                           
                </form>
                <p className='toLogin'>Already have an account?</p>
            </div>
        )
    }
}

export default Register;