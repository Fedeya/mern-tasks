import React from 'react';

import Project from './Project';

function ListProjects() {

  const projects = [{ name: 'Tienda Virtual' }, { name: 'Web Design' }, { name: 'Mobile App' }];

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