/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-console */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AdminRoute = ({
  component: Component, isAuthenticated, isAdmin, ...rest
}) => (

    <Route
      {...rest}
      render={props => (isAuthenticated && isAdmin === true ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        ))
      }
    />
  );
AdminRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
});
export default connect(mapStateToProps, null)(AdminRoute);
