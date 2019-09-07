import React from 'react';

const DashboardSidebar = () => (
  <nav className="sidebar">
    <ul className="side-nav">
      <li className="side-nav__item side-nav__item--active">
        <a href="user-dashboard.html" className="side-nav__link">
          <i className="side-nav__icon fas fa-tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="user-loan-application.html" className="side-nav__link">
          <i className="side-nav__icon fas fa-edit" />

          <span>Apply for Loans</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#." className="side-nav__link">
          <i className="side-nav__icon fas fa-user" />
          <span>Profile</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="index.html" className="side-nav__link">
          <i className="side-nav__icon fas fa-sign-out-alt" />
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </nav>
);
export default DashboardSidebar;
