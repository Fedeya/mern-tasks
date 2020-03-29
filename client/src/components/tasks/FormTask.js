import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';

function FormTask() {

  const { project } = useContext(projectContext);

  if(!project) return null;

  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input 
            type="text"
            name="name"
            className="input-text"
            placeholder="Task Name"
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