import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@Common/logo/Logo';
import '../Navbar.scss';

const UnauthenticatedHeader = () => (
  <nav className="nav-bar">
    <Link to="/">
      <Logo />
    </Link>
    <ul className="nav-items">
      <li>
        <Link to="/signin" className=" nav-link nav-link__login">
          Login
        </Link>
      </li>
      <li>
        <Link to="/signup" className=" nav-link nav-link__register">
          Register
        </Link>
      </li>
    </ul>
  </nav>
);
export default UnauthenticatedHeader;
