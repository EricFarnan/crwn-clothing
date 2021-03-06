import React from 'react'
import FormInput from '../../extensions/form-input/form-input.component'
import CustomButton from '../../extensions/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'
import './login.styles.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }
        catch (error) {
            if (error.code === 'auth/user-not-found' ||
                error.code === 'auth/wrong-password') {
                alert('Username or password was not correct.');
            }
            else {
                alert('An unknown login error occured.');
            }
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='login'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" required value={this.state.email} handleChange={this.handleChange}/>
                    <FormInput name="password" type="password" label="Password" required value={this.state.password} handleChange={this.handleChange}/>
                    <div className='buttons'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;