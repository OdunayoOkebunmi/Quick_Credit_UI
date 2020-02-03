import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogOut } from '@Actions/authActions';
import DashboardSidebarNav from './DashboardSidebarNav';

class AdminDashboardSidebar extends Component {
  logOut = () => {
    const { quit, history } = this.props;
    return quit(history);
  };

  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <DashboardSidebarNav
            classNameList="side-nav__item"
            to="/verify-users"
            classNameLink="side-nav__link"
            text="Verify Users"
          />
          <DashboardSidebarNav
            classNameList="side-nav__item side-nav__item--active"
            to="/admin-dashboard"
            classNameLink="side-nav__link"
            text="Loan Applications"
          />
          <DashboardSidebarNav
            classNameList="side-nav__item"
            to="/current-loans"
            classNameLink="side-nav__link"
            text="Current Loans"
          />
          <DashboardSidebarNav
            classNameList="side-nav__item"
            to="/repaid-loan"
            classNameLink="side-nav__link"
            text="Repaid Loans"
          />
          <DashboardSidebarNav
            classNameList="side-nav__item"
            to="/post-repayment"
            classNameLink="side-nav__link"
            text="Post Repayment Transactions"
          />
          <DashboardSidebarNav
            classNameList="side-nav__item"
            to="/"
            classNameLink="side-nav__link"
            text="Logout"
            onClick={this.logOut}
          />
        </ul>
      </nav>
    );
  }
}
AdminDashboardSidebar.propTypes = {
  history: PropTypes.object.isRequired,
  quit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  quit: history => dispatch(userLogOut(history)),
});
export default connect(
  null,
  mapDispatchToProps,
)(withRouter(AdminDashboardSidebar));
