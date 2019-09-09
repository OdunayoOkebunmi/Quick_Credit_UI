import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => (
  <header className="dashboard-header">
    <Link to="/">
      <img
        srcSet="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-sm_o2xdjf.png 1x, https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-md_a1owld.png 2x"
        alt="Quick Credit logo"
        src="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-sm_o2xdjf.png"
        className="logo"
      />
    </Link>
    <form action="" className="search">
      <input type="text" className="search__input" placeholder="Search" />
      <button className="search__button" type="button">
        <i className="search__icon fas fa-search" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__user">
        <span className="user-nav__user-name">Jane Doe</span>
      </div>
    </nav>
  </header>
);

export default DashboardHeader;
