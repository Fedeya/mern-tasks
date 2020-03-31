import React, { useContext } from 'react';

import taskContext from '../../context/tasks/taskContext';

function Task({ task }) {

  const { deleteTask } = useContext(taskContext);

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        { 
          task.state ?
          (
            <button className="complete">Complete</button>
          ) 
            :
          (
            <button className="incomplete">Incomplete</button>
          ) 
        }
      </div>
      <div className="actions">
        <button className="btn btn-primary">
          Edit
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;