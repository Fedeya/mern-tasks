import React, { useContext } from 'react';

import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

function Task({ task }) {

  const { deleteTask, stateTask, activeTask } = useContext(taskContext);
  const { project } = useContext(projectContext);

  const handleClickState = () => {
    task.state = !task.state;
    stateTask(task);
  }

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        { 
          task.state ?
          (
            <button 
              className="complete"
              onClick={handleClickState}
            >
              Complete
            </button>
          ) 
            :
          (
            <button 
              className="incomplete"
              onClick={handleClickState}
            >
              Incomplete
            </button>
          ) 
        }
      </div>
      <div className="actions">
        <button 
          className="btn btn-primary"
          onClick={() => activeTask(task)}
        >
          Edit
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => deleteTask(task._id, project._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;