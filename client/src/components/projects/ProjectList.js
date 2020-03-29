import React, { useContext } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';

function ListProjects() {

  const { projects } = useContext(projectContext);

  return (
    <ul className="list-projects">
      {
        projects && projects.map(project => (
          <Project project={project} key={project.name} />
        ))
      }
    </ul>
  );
}

export default ListProjects;