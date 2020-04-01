import React, { useContext, useState, useEffect } from 'react';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function FormTask() {

  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const { project } = useContext(projectContext);
  const { addTask, task, editTask, cleanTask } = useContext(taskContext);

  useEffect(() => {
    if(task) {
      setName(task.name);
    }
  }, [task])

  if(!project) return null;

  const handleSubmit = e => {
    e.preventDefault();

    if(name.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    
    if(task) {
      editTask(name);
      cleanTask();
    } else {
      addTask(project.id, name);
    }
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
            { task ? 'Edit Task' :  'Add Task' }
          </button>
        </div>
      </form>
      {
        error && (
          <p className="message error">The name of tarea is required</p>
        )
      }

    </div>
  );
}

export default FormTask;