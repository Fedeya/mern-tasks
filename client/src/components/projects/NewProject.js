import React, { Fragment } from 'react';

function NewProject() {
  return (
    <Fragment>
      <button className="btn btn-block btn-primary">
        New Project
      </button>

      <form className="form-new-project" >
        <input 
          type="text" 
          name="name"
          className="input-text"
          placeholder="Project Name"
        />

        <button className="btn btn-primary btn-block">
          Add Project
        </button>

      </form>

    </Fragment>
  );
}

export default NewProject;