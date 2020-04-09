import React, { Fragment, useState, useContext } from 'react';

import projectContext from '../../context/projects/projectContext';
import alertContext from '../../context/alerts/alertContext';

function NewProject() {

  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const { openForm, showForm, addProject } = useContext(projectContext);
  const { showAlert, alert } = useContext(alertContext);

  const handleSubmit = e => {
    e.preventDefault();

    if(name.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    addProject(name);
    showAlert(`The project ${name} is created`, 'alert-ok');
    setName('');
  }

  return (
    <Fragment>
      { alert && (<div className={`alert ${alert.category}`}>{alert.msg}</div>) }
      <button className="btn btn-block btn-primary" onClick={showForm}>
        New Project
      </button>

      {
        openForm && (
          <form className="form-new-project" onSubmit={handleSubmit} >
            <input
              type="text"
              name="name"
              className="input-text"
              placeholder="Project Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <button className="btn btn-primary btn-block">
              Add Project
            </button>

          </form>
        )
      }
      {
        error && <p className="error message">The name is required</p>
      }

    </Fragment>
  );
}

export default NewProject;