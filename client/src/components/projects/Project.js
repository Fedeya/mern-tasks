import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';

function Project({ project }) {

  const { activeProject } = useContext(projectContext);

  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => activeProject(project)}
      >
        {project.name}
      </button>
    </li>
  );
}

export default Project;