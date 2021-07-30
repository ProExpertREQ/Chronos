import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Body from './styles';

import SideBar from './components/SideBar';
import MyClasses from './pages/MyClasses';
import Departments from './pages/Departments';
import Courses from './pages/Courses';
import Subjects from './pages/Subjects';
import Classes from './pages/Classes';
import User from './pages/User';

import { SidebarContext } from '../Context/SidebarContext';

export default function Main() {
  const { hiddenSidebar } = useContext(SidebarContext);

  return (
    <Body>
      <Router>
        <SideBar />
        <div className={hiddenSidebar ? 'sidebar-hidden' : 'container'}>
          <Switch>
            <Route
              exact
              path="/minhas-turmas"
              component={MyClasses}
            />
            <Route
              exact
              path="/departamentos"
              component={Departments}
            />
            <Route
              exact
              path="/cursos"
              component={Courses}
            />
            <Route
              exact
              path="/materias"
              component={Subjects}
            />
            <Route
              exact
              path="/turmas"
              component={Classes}
            />
            <Route
              exact
              path="/perfil"
              component={User}
            />
          </Switch>
        </div>
      </Router>
    </Body>
  );
}
