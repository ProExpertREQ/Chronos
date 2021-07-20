import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Body from './styles';

import SideBar from './components/SideBar';
import MyClasses from './components/pages/MyClasses';
import Departments from './components/pages/Departments';
import Courses from './components/pages/Courses';
import Subjects from './components/pages/Subjects';
import Classes from './components/pages/Classes';

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
          </Switch>
        </div>
      </Router>
    </Body>
  );
}
