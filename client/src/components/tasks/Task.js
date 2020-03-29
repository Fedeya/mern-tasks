import React from 'react';

function Task({ task }) {
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
        <button className="btn btn-secondary">
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;