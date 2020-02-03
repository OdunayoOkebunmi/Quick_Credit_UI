import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UnathenticatedHeader from './unauthenticatedHeader/unauthenticatedHeader';
import AuthenticatedHeader from './authenticatedHeader/authenticatedHeader';
import './Header.scss';

const Header = ({ auth }) => {
  const { isAuthenticated } = auth;
  return (
    <header className="header">
      { isAuthenticated ? <AuthenticatedHeader /> : <UnathenticatedHeader /> }
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Quick Credit </span>
          <span className="heading-primary--sub">
            Getting instant loan is as easy as pie
          </span>
        </h1>
        <Link to="/signup" className="btn btn--white btn--animated">
          Apply here
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
