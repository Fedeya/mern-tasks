import React, { useContext } from 'react';

import taskContext from '../../context/tasks/taskContext';

function Task({ task }) {

  const { deleteTask, stateTask } = useContext(taskContext);

  const handleClickState = () => {
    task.state = !task.state;
    console.log(task);
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
            >Complete</button>
          ) 
            :
          (
            <button 
              className="incomplete"
              onClick={handleClickState}
            >Incomplete</button>
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