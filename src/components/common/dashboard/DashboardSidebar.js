import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogOut } from '@Actions/authActions';
import DashboardSidebarNav from './DashboardSidebarNav';

class DashboardSidebar extends Component {
  logOut = () => {
    const { quit, history } = this.props;
    return quit(history);
  }

  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <DashboardSidebarNav classNameList="side-nav__item side-nav__item--active" to="/dashboard" classNameLink="side-nav__link" text="Dashboard" />
          <DashboardSidebarNav classNameList="side-nav__item" to="/" classNameLink="side-nav__link" text="Apply for loans" />
          <DashboardSidebarNav classNameList="side-nav__item" to="/" classNameLink="side-nav__link" text="Profile" />
          <DashboardSidebarNav classNameList="side-nav__item" to="/" classNameLink="side-nav__link" text="Logout" onClick={this.logOut} />
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
