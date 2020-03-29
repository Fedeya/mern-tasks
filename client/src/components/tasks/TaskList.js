import React, { Fragment, useContext } from 'react';

import Task from './Task';

import projectContext from '../../context/projects/projectContext';

function TaskList() {

  const tasks = [
    {name: 'Select Platform', state: true},
    {name: 'Select Colors', state: false},
    {name: 'Select Payment Platform', state: false},
    {name: 'Select Hosting', state: true}
  ];

  const { project, deleteProject } = useContext(projectContext);
  
  if(!project) return <h2>Select a project!</h2>;

  return (
    <Fragment>
      <h2>Project: {project.name}</h2>
      <ul className="list-tasks">
        { 
          tasks && 
          tasks.length > 0 ? 
          tasks.map(task => (
              <Task task={task} key={task.name} />
          )) : (<li className="task">There is not tasks</li>)
        }
      </ul>
      <button 
        className="btn btn-delete" 
        onClick={() => deleteProject(project.id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
}

export default TaskList;