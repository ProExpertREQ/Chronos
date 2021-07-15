import React from 'react';

import SideMenu from './styles';

const SideBar = () => (
  <SideMenu>
    <section className="top-section">
      <div className="logo">
        <h1>CHRONOS</h1>
      </div>
      <div className="toggle-menu-btn">
        <i className="bi bi-arrow-left-square-fill" />
      </div>
    </section>
  </SideMenu>
);

export default SideBar;
