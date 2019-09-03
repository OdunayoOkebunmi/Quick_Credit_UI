import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="nav">
      <li className="nav__item">
        <BrowserRouter>
          <Link to="/signin" className="nav__link">
            Contact Us
          </Link>
        </BrowserRouter>
      </li>
      <li className="nav__item">
        <BrowserRouter>
          <Link to="/signin" className="nav__link">
            Blog
          </Link>
        </BrowserRouter>
      </li>
      <li className="nav__item">

        <BrowserRouter>
          <Link to="/signin" className="nav__link">
            Privacy and Security
          </Link>
        </BrowserRouter>
      </li>
      <li className="nav__item">
        <BrowserRouter>
          <Link to="/signin" className="nav__link">
            Terms and Conditions
          </Link>
        </BrowserRouter>
      </li>
    </ul>
    <p className="copyright">
      &copy; Copyright 2019. All rights reserved.
      <br />
      Odunayo Okebunmi
    </p>
  </footer>
);
export default Footer;
