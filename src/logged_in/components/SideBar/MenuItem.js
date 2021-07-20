import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({
  name, to, icon,
}) => (
  <NavLink to={to} className="menu-item">
    <li>
      <div className="item-icon">
        <i className={icon} />
      </div>
      <span>{name}</span>
    </li>
  </NavLink>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
