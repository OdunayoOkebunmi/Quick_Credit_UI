import React from 'react';
import './Header.scss';
import Navbar from './navbar/Navbar';
import '@Common/_buttons.scss';
import '@Common/_animations.scss';

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
      <a
        href="sign-up.html"
        target="_blank"
        className="btn btn--white btn--animated"
      >
        Apply here

      </a>
    </div>
  </header>
);

export default Header;
