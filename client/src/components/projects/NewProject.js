import React, { Fragment, useState, useContext } from 'react';

import projectContext from '../../context/projects/projectContext';

function NewProject() {

  const [name, setName] = useState('');
  const { openForm, showForm } = useContext(projectContext);

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <Fragment>
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

    </Fragment>
  );
}

export default NewProject;