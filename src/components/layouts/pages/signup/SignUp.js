import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from '@Common/input/InputField';
import Button from '@Common/button/Button';
import { userSignUp } from '@Actions/authActions';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignUp = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      address,
    } = this.state;
    const userData = {
      firstName,
      lastName,
      email,
      password,
      address,
    };
    const { onSubmit, history } = this.props;
    onSubmit(userData, history);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      address,
    } = this.state;
    return (
      <section className="section-sign-up">
        <div className="form-container">
          <h2 className="heading-secondary">
            ACCOUNT REGISTRATION
          </h2>
          <form id="sign-up-form" onSubmit={this.handleSignUp}>
            <label htmlFor="new-user-fname">First Name</label>
            <InputField
              required
              value={firstName}
              type="text"
              id="new-user-fname"
              className="form-control"
              name="firstName"
              onChange={this.handleInputChange}
            />
            <label htmlFor="new-user-lname">Last Name</label>
            <InputField
              required
              value={lastName}
              type="text"
              id="new-user-lname"
              className="form-control"
              name="lastName"
              onChange={this.handleInputChange}
            />
            <label htmlFor="new-user-email">Email</label>
            <InputField
              required
              value={email}
              type="email"
              id="new-user-email"
              className="form-control"
              name="email"
              onChange={this.handleInputChange}
            />
            <label htmlFor="new-user-address">Address</label>
            <InputField
              required
              value={address}
              type="text"
              id="new-user-address"
              className="form-control"
              name="address"
              onChange={this.handleInputChange}
            />
            <label htmlFor="new-user-password">Password</label>
            <InputField
              required
              value={password}
              type="password"
              id="new-user-password"
              className="form-control"
              name="password"
              onChange={this.handleInputChange}
            />
            <Button
              type="submit"
              className="btn btn--block"
              id="submit-btn"
              text="REGISTER"
            />
          </form>
        </div>
      </section>
    );
  }
}
SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (userData, history) => dispatch(userSignUp(userData, history)),
});
export const SignUpComponent = SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
