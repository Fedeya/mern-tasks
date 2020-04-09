import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Project from './Project';

import projectContext from '../../context/projects/projectContext';

function ListProjects() {

  const { projects, getProjects } = useContext(projectContext);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if (projects.length === 0) return <p>There are no projects, start by creating one</p>;

  return (
    <ul className="list-projects">
      <TransitionGroup>
        {
          projects && projects.map(project => (
            <CSSTransition
              key={project._id}
              timeout={200}
              classNames="project"
            >
              <Project project={project} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </ul>
  );
}

export default ListProjects;