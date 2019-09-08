/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userLogOut } from '@Actions/authActions';

class DashboardSidebar extends Component {
  logOut = () => {
    const { quit, history } = this.props;
    return quit(history);
  }

  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <a href="user-dashboard.html" className="side-nav__link">
              <i className="side-nav__icon fas fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="side-nav__item">
            <Link to="/" className="side-nav__link">
              <i className="side-nav__icon fas fa-edit" />

              <span>Apply for Loans</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to="/profile" className="side-nav__link">
              <i className="side-nav__icon fas fa-user" />
              <span>Profile</span>
            </Link>
          </li>
          <li className="side-nav__item" id="logout">
            <Link to="/" className="side-nav__link" onClick={this.logOut}>
              <i className="side-nav__icon fas fa-sign-out-alt" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
DashboardSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  quit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  quit: history => dispatch(userLogOut(history)),
});
export default connect(null, mapDispatchToProps)(withRouter(DashboardSidebar));
