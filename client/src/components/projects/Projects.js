import React, { useContext, useEffect } from 'react';

import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';

import AuthContext from '../../context/authentication/authContext';

function Projects() {

  const { userAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container-app">
      <Sidebar />

      <div className="section-main">
        <Header />

        <main>
          <FormTask />
          <div className="container-tasks">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;