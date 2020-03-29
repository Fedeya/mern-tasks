import React, { useContext, useEffect } from 'react';

import Project from './Project';

import projectContext from '../../context/projects/projectContext';

function ListProjects() {

  const { projects, getProjects } = useContext(projectContext);
  
  useEffect(() => {
    getProjects();
  }, []);  

  if(projects.length === 0) return null;

  return (
    <ul className="list-projects">
      {
        projects && projects.map(project => (
          <Project project={project} key={project.id} />
        ))
      }
    </ul>
  );
}

export default ListProjects;