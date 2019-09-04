import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="nav-bar">
    <a href="index.html">
      <picture>
        <source
          media="(max-width:600px)"
          srcSet="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-sm_o2xdjf.png 1x, https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-md_a1owld.png 2x"

        />
        <img
          srcSet="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-sm_o2xdjf.png 1x, https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-md_a1owld.png 2x"
          alt="Quick Credit logo"
          src="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/logo-sm_o2xdjf.png"
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
