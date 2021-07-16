import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SideMenu from './styles';
import user from '../../../assets/img/avatar.png';
import MenuItem from './MenuItem';

const SideBar = ({ onColapse }) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    onColapse(inactive);
  });

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

      <section className="main-menu">
        <ul>
          <MenuItem
            title="Minhas turmas"
            href="minhas-turmas"
            icon="bi bi-grid-fill"
            active={!inactive}
          />
          <MenuItem
            title="Departamentos"
            href="departamentos"
            icon="bi bi-archive-fill"
            active={inactive}
          />
          <MenuItem
            title="Cursos"
            href="cursos"
            icon="bi bi-collection-fill"
            active={!inactive}
          />
          <MenuItem
            title="Matérias"
            href="materias"
            icon="bi bi-file-earmark-text-fill"
            active={!inactive}
          />
          <MenuItem
            title="Turmas"
            href="turmas"
            icon="bi bi-people-fill"
            active={!inactive}
          />
        </ul>
      </section>

      <div className="divider" />

      <section className="footer-menu">
        <div className="avatar">
          <img src={user} alt="User" />
        </div>
        <div className="user-info">
          <h5>Douglas Castro</h5>
          <p>douglas@email.com</p>
        </div>
      </section>
    </SideMenu>
  );
};

SideBar.propTypes = {
  onColapse: PropTypes.func.isRequired,
};

export default SideBar;
