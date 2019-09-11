/* eslint-disable indent */
/* eslint-disable no-console */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('jwtToken') ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    ))
    }
  />
  );
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(PrivateRoute);
