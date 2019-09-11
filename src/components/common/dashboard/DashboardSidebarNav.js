import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardSidebarNav = ({
  classNameList, classNameLink, to, text, ...rest
}) => (
  <li className={classNameList}>
    <Link to={to} className={classNameLink} {...rest}>
      <i className="side-nav__icon fas fa-edit" />
      <span>{text}</span>
    </Link>
  </li>
);
DashboardSidebarNav.propTypes = {
  classNameLink: PropTypes.string.isRequired,
  classNameList: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default DashboardSidebarNav;
