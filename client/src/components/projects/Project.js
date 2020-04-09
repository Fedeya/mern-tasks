import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function Project({ project }) {

  const { activeProject } = useContext(projectContext);
  const { getTasks } = useContext(taskContext);

  const handleClick = () => {
    activeProject(project);
    getTasks(project._id);
  }

  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={handleClick}
      >
        {project.name}
      </button>
    </li>
  );
}

export default Project;