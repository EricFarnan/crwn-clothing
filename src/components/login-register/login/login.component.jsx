import React from 'react'
import FormInput from '../../../components/form-input/form-input.component'
import CustomButton from '../../../components/custom-button/custom-button.component'
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
            console.log(error);
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

                {/* Not going to be a link but this needs to send data back to the parent to change the ternary operator value */}
                <p className='toRegister'>Don't have an account yet?</p>
            </div>
        )
    }
}

export default Login;