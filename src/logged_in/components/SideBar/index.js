import React, { useContext } from 'react';

import SideMenu from './styles';
import user from '../../../assets/img/avatar.png';
import MenuItem from './MenuItem';

import { SidebarContext } from '../../../Context/SidebarContext';

const menuItems = [
  { name: 'Minhas Turmas', icon: 'bi bi-grid-fill', to: '/minhas-turmas' },
  { name: 'Departamentos', icon: 'bi bi-archive-fill', to: '/departamentos' },
  { name: 'Cursos', icon: 'bi bi-collection-fill', to: '/cursos' },
  { name: 'Matérias', icon: 'bi bi-file-earmark-text-fill', to: '/materias' },
  { name: 'Turmas', icon: 'bi bi-people-fill', to: '/turmas' },
];

const SideBar = () => {
  const { handleToggleSidebar, hiddenSidebar } = useContext(SidebarContext);

  return (
    <SideMenu className={hiddenSidebar ? 'inactive' : ''}>
      <section className="top-section">
        <h1>CHRONOS</h1>
        <button
          onClick={handleToggleSidebar}
          type="button"
          className="toggle-menu-btn"
        >
          {hiddenSidebar
            ? <i className="bi bi-arrow-right-square-fill" />
            : <i className="bi bi-arrow-left-square-fill" />}
        </button>
      </section>

      <div className="divider" />

      <section className="main-menu">
        <ul>
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              name={menuItem.name}
              icon={menuItem.icon}
              to={menuItem.to}
            />
          ))}
          {/* <MenuItem
            title="Minhas turmas"
            href="minhas-turmas"
            icon="bi bi-grid-fill"
            active={!hiddenSidebar}
          />
          <MenuItem
            title="Departamentos"
            href="departamentos"
            icon="bi bi-archive-fill"
            active={hiddenSidebar}
          />
          <MenuItem
            title="Cursos"
            href="cursos"
            icon="bi bi-collection-fill"
            active={!hiddenSidebar}
          />
          <MenuItem
            title="Matérias"
            href="materias"
            icon="bi bi-file-earmark-text-fill"
            active={!hiddenSidebar}
          />
          <MenuItem
            title="Turmas"
            href="turmas"
            icon="bi bi-people-fill"
            active={!hiddenSidebar}
          /> */}
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

export default SideBar;
