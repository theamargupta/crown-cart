import React from 'react';
import FormInput from '../form-input/form-in-comp';
import CustomButton from '../custom-btn/custom-btn-comp';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in-style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="EMAIL"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChange}
            label="PASSWORD"
            required
          />

          <CustomButton type="submit">SignIn</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
