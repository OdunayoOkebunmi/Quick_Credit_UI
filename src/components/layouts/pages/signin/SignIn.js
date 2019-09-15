import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputField from '@Common/input/InputField';
import Button from '@Common/button/Button';
import { userSignIn } from '@Actions/authActions';
import '@Common/styles/_auth.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignIn = (event) => {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;
    const userData = {
      email,
      password,
    };
    const { onSubmit, history } = this.props;
    onSubmit(userData, history);
  }


  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <section className="section-sign-up">
        <div className="form-container">
          <h2 className="heading-secondary">
            ACCOUNT LOGIN
          </h2>
          <form onSubmit={this.handleSignIn} id="sign-up-form">
            <label htmlFor="user-email">Email</label>
            <InputField
              required
              value={email}
              type="email"
              id="new-user-email"
              className="form-control"
              name="email"
              onChange={this.handleInputChange}
            />
            <label htmlFor="user-password">Password</label>
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
              text="LOGIN"
            />
            <p className="alt-registration">
              Click
              <Link to="/signup" className="alt-registration__link">
                here
              </Link>
              to register an account
            </p>
          </form>
        </div>
      </section>
    );
  }
}
SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (userData, history) => dispatch(userSignIn(userData, history)),
});

export const SignInComponent = SignIn;
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
