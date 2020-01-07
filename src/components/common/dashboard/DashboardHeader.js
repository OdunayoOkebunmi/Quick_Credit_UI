import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@Common/logo/Logo';

const DashboardHeader = () => (
  <header className="dashboard-header">
    <Link to="/">
      <Logo />
    </Link>
    <form action="" className="search">
      <input type="text" className="search__input" placeholder="Search" />
      <button className="search__button" type="button">
        <i className="search__icon fas fa-search" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__user">
        <span className="user-nav__user-name">Joe Doe</span>
      </div>
    </nav>
  </header>
);

export default DashboardHeader;
