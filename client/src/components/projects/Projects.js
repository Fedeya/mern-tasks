import React from 'react';

import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

import FormTask from '../tasks/FormTask'; 

function Projects() {
  return (
    <div className="container-app">
      <Sidebar />

      <div className="section-main">
        <Header />

        <main>
          <FormTask />
          <div className="container-tasks">
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;