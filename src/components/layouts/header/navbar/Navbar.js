import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import LogoSmall from '../../../images/logo-sm.png';
import LogoMedium from '../../../images/logo-md.png';

import './Navbar.scss';

const Navbar = () => (
  <nav className="nav-bar">
    <a href="index.html">
      <picture>
        <source
          media="(max-width:600px)"
          srcSet={`${LogoSmall} 1x, ${LogoMedium} 2x`}
        />
        <img
          srcSet={`${LogoSmall} 1x, ${LogoMedium} 2x`}
          alt="Quick Credit logo"
          src={LogoSmall}
        />
      </picture>
    </a>
    <ul className="nav-items">
      <li>
        <BrowserRouter>
          <Link to="/signin" className=" nav-link nav-link__login">
            Login
          </Link>
        </BrowserRouter>
      </li>
      <li>
        <BrowserRouter>
          <Link to="/signup" className=" nav-link nav-link__register">
            Register
          </Link>
        </BrowserRouter>
      </li>
    </ul>
  </nav>
);
export default Navbar;
