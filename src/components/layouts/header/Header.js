import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './Header.scss';

const Header = () => (

  <header className="header">
    <Navbar />
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

export default Header;
