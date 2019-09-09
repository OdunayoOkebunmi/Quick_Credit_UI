import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ component: Component, auth, ...rest }) => {
  const {
    isAuthenticated,
  } = auth;
  // eslint-disable-next-line no-console
  console.log(auth);
  return (
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
};

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
