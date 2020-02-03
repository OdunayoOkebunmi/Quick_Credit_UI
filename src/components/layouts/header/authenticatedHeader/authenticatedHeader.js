import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '@Common/logo/Logo';
import { connect } from 'react-redux';
import '../Navbar.scss';

const AuthenticatedHeader = ({ auth }) => {
  const { user: { payload: { isAdmin } } } = auth;
  return (
    <nav className="nav-bar">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="nav-items">
        { isAdmin ? (
          <li>
            <Link to="/admin-dashboard" className=" nav-link nav-link__register">
              Admin Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard" className=" nav-link nav-link__register">
                Dashboard
            </Link>
          </li>
        ) }
      </ul>
    </nav>
  );
};

AuthenticatedHeader.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthenticatedHeader);
