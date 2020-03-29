import React from 'react';

import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';

function Projects() {
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