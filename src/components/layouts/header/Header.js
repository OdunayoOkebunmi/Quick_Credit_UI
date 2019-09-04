import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Header.scss';
import Navbar from './navbar/Navbar';
import '@Common/_buttons.scss';
import '@Common/_animations.scss';
import '@Common/_typography.scss';

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
      <BrowserRouter>
        <Link to="/signup" className="btn btn--white btn--animated">
          Apply here
        </Link>
      </BrowserRouter>
    </div>
  </header>
);

export default Header;
