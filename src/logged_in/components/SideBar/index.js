import React, { useState } from 'react';

import SideMenu from './styles';

const SideBar = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <SideMenu className={inactive ? 'inactive' : ''}>
      <section className="top-section">
        <h1>CHRONOS</h1>
        <button
          onClick={() => setInactive(!inactive)}
          type="button"
          className="toggle-menu-btn"
        >
          {inactive
            ? <i className="bi bi-arrow-right-square-fill" />
            : <i className="bi bi-arrow-left-square-fill" />}
        </button>
      </section>

      <div className="divider" />
    </SideMenu>
  );
};

export default SideBar;
