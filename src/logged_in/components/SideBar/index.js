import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import SideMenu from './styles';

const SideBar = () => (
  <SideMenu>
    <section className="top-section">
      <div className="logo">
        <h1>CHRONOS</h1>
      </div>
      <div className="toggle-menu-btn">
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </section>
  </SideMenu>
);

export default SideBar;
