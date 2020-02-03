/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const AdminRoutes = ({ component: Component, auth, ...rest }) => {
  const {
    isAuthenticated,
    user: { payload: { isAdmin } },
  } = auth;
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated && isAdmin ? (
        <Component {...props} />
      ) : (
          <Redirect to='/' />
        ))
      }
    />
  );
};

AdminRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoutes);
