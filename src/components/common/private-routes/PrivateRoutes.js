/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-console */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component, isAuthenticated, isAdmin, ...rest
}) => (

    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        ))
      }
    />
  );
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
});
export default connect(mapStateToProps, null)(PrivateRoute);
