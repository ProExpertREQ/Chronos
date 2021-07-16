import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
  title, href, icon, active,
}) => (
  <li className={active ? 'active' : ''}>
    <a href={href} className="menu-item">
      <div className="item-icon">
        <i className={icon} />
      </div>
      <span>{title}</span>
    </a>
  </li>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default MenuItem;
