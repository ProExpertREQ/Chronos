import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Body from './styles';
import SideBar from './components/SideBar';

const MyClasses = () => <h1>Minhas Turmas</h1>;
const Departments = () => <h1>Departamentos</h1>;
const Courses = () => <h1>Cursos</h1>;
const Subjects = () => <h1>Matérias</h1>;
const Classes = () => <h1>Turmas</h1>;

export default function Main() {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  return (
    <Body>
      <BrowserRouter>
        <SideBar onColapse={(inactive) => {
          setSidebarHidden(inactive);
        }}
        />
        <div className={sidebarHidden ? 'sidebar-hidden' : 'container'}>
          <Switch>
            <Route exact path="/minhas-turmas">
              <MyClasses />
            </Route>
            <Route exact path="/departamentos">
              <Departments />
            </Route>
            <Route exact path="/cursos">
              <Courses />
            </Route>
            <Route exact path="/materias">
              <Subjects />
            </Route>
            <Route exact path="/turmas">
              <Classes />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Body>
  );
}
