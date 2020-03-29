import React, { useContext, useState } from 'react';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function FormTask() {

  const [name, setName] = useState('');

  const { project } = useContext(projectContext);
  const { addTask } = useContext(taskContext);

  if(!project) return null;

  const handleSubmit = e => {
    e.preventDefault();
    addTask(project.id, name);
    setName('');
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div className="container-input">
          <input 
            type="text"
            name="name"
            className="input-text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container-input">
          <button className="btn btn-primary btn-submit btn-block">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormTask;