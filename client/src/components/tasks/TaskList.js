import React, { Fragment } from 'react';

import Task from './Task';

function TaskList() {

  const tasks = [
    {name: 'Select Platform', state: true},
    {name: 'Select Colors', state: false},
    {name: 'Select Payment Platform', state: false},
    {name: 'Select Hosting', state: true}
  ];
  
  return (
    <Fragment>
      <h2>Project: Virtual Store</h2>
      <ul className="list-tasks">
        { 
          tasks && 
          tasks.length > 0 ? 
          tasks.map(task => (
              <Task task={task} />
          )) : (<li className="task">There is not tasks</li>)
        }
      </ul>
      <button className="btn btn-delete">
        Delete Project &times;
      </button>
    </Fragment>
  );
}

export default TaskList;